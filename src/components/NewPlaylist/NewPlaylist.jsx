import styles from './NewPlaylist.module.css'

import { useState } from "react"

const NewPlaylist = (props) => {
  const [addingPlaylist, setAddingPlaylist] = useState(false) 
  const [form, setForm] = useState({
    title: '',
    recs: [props.rec]
  })

  const handleAddClick = () => {
    setAddingPlaylist(!addingPlaylist)
  }

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handlePlaylistExpand()
    props.handleCreatePlaylist(form)
  }

  return ( 
    <>
      {addingPlaylist 
      ? 
        <button onClick={handleAddClick} className=   {styles.collapseButton}>
            -
        </button>
      : 
        <button onClick={handleAddClick} className={styles.button}>
          + New
        </button>}
      {addingPlaylist && 
        <form onSubmit={handleSubmit}>
          <input 
            required
            type="text" 
            name="title"
            value={form.title}
            placeholder='Title'
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Add Playlist</button>
        </form>
      }
    </>
  );
}

export default NewPlaylist;