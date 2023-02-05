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
    // add playlist function here
  }

  return ( 
    <>
      <button onClick={handleAddClick}>
        {addingPlaylist ? 
          '-'
          : '+'
        }
      </button>
      {addingPlaylist && 
        <form onSubmit={handleSubmit}>
          <input 
            required
            type="text" 
            name="title"
            value={form.title}
            placeholder='Title'
            onChange={handleChange}
          />
          <button type="submit">Add Playlist</button>
        </form>
      }
    </>
  );
}

export default NewPlaylist;