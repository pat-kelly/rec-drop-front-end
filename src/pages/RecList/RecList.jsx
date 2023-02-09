import { useEffect, useState } from "react";

import RecCard from "../../components/RecCard/RecCard";
import styles from './RecList.module.css'
import DroppedRecs from '../../assets/dropped-recs.png'

const RecList = ({recs, user, handleSearchTerms, handlePageChange}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    handlePageChange()
  })

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
    } else if (filterCategory === "Book") {
      return ('Book') 
    } else if (filterCategory === "Song") {
      return ('Song')
    } else if (filterCategory === "Album") {
      return ('Album')
    }
  }

  const updateSearchTerms  = ({ target })=>{
    console.log(target.value);
    handleSearchTerms(target.value)
  }

  return ( 
    <main className={styles.main}>  
      <div className={styles.header}>
        <img src={DroppedRecs} alt="dropped recs with purple narwhal" />
        <input className={styles.searchBar} onChange={updateSearchTerms} placeholder="I'm searching for..." type="text" name="searchTerms" />
        <select name="category" 
          onChange={handleCategorySelect}
        >
          <option value="">- - All - -</option>
          <option value="Movie">Movies</option>
          <option value="TV Show">TV Shows</option>
          <option value="Book">Books</option>
          <option value="Song">Songs</option>
          <option value="Album">Albums</option>
        </select>
      </div>
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