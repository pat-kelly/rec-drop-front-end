import { useState } from "react";

import RecCard from "../../components/RecCard/RecCard";
import styles from './RecList.module.css'


const RecList = ({recs, user}) => {
  const [filterCategory, setFilterCategory] = useState('')

  const handleCategorySelect = ({ target }) => {
    setFilterCategory(target.value)
  }

  const filterCat = (rec) => {
    if (filterCategory === '') {
      return rec.category
    } else if (filterCategory === "Movie") {
      return ('Movie')
    } else if (filterCategory === "TV Show") {
      return ('TV Show') 
    } else if (filterCategory === "Books") {
      return ('Book') 
    } else if (filterCategory === "Song") {
      return ('Song')
    } else if (filterCategory === "Album") {
      return ('Album')
    }
  }

  return ( 
    <main className={styles.main}>  
      <h1>All Recs</h1>
      <select name="category" 
        onChange={handleCategorySelect}
      >
        <option value="">-- All --</option>
        <option value="Movie">Movies</option>
        <option value="TV Show">TV Shows</option>
        <option value="Book">Books</option>
        <option value="Song">Songs</option>
        <option value="Album">Albums</option>
      </select>
      <div className={styles.container}>
      {recs.map(rec => (
        (rec.show && rec.category === (filterCat(rec))) &&
        <RecCard key={rec._id} rec={rec} user={user}/>
      ))}
      </div>
    </main>
  );
}

export default RecList;