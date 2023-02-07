import RecCard from "../../components/RecCard/RecCard";
import styles from './RecList.module.css'

const RecList = ({recs, user}) => {
  const handleCategorySelect = () => {
    if (category === "Movie/TV") {
      return ("(rec.category === 'Movie' || rec.category === 'TV Show')")
    } else if (category === "Books") {
      return ("rec.category === 'Book'") 
    } else if (category === "Music") {
      return ("(rec.category === 'Song' || rec.category === 'Album')")
    }
  }

  console.log(recCat)

  return ( 
    <main className={styles.main}>  
      <h1>All Recs</h1>
      <select name="category" 
        onChange={handleCategorySelect}
      >
        <option value="">-- All --</option>
        <option value="Movie/TV">Movies/TV Shows</option>
        <option value="Books">Books</option>
        <option value="Music">Music</option>
      </select>
      <div className={styles.container}>
      {recs.map(rec => (
        rec.show &&
        <RecCard key={rec._id} rec={rec} user={user}/>
      ))}
      </div>
    </main>
  );
}

export default RecList;