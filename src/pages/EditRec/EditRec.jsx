import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from './EditRec.module.css'

const EditRec = (props) => {

  // state = rec, props = handleUpdateRec

  const {state} = useLocation()
  const [form, setForm] = useState(state)
  const [category, setCategory] = useState(state.category)
  const [photoData, setPhotoData] = useState(state)

  useEffect(() => {
    window.scrollTo(0, 0)
    props.handlePageChange()
  }, [])

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateRec(form, photoData.photo)
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const displayCreatorLabel = () => {
    if (category === 'Movie' || category === 'TV Show') {
      return 'Director'
    } else if (category === 'Song' || category === 'Album') {
      return 'Artist'
    } else if (category === 'Book') {
      return 'Author'
    }
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        {category && <div>
            <label htmlFor="title-input">Title:</label>
            <input 
              required
              type='text'
              name='title'
              id='title-input'
              value={form.title}
              placeholder={`${category} Title`}
              onChange={handleChange}
            />
            <label htmlFor="creator-input">{displayCreatorLabel()}:</label>
            <input 
              type='text'
              name='creator'
              id='creator-input'
              value={form.creator}
              placeholder={displayCreatorLabel()}
              onChange={handleChange}
            />
            <label htmlFor="year-input">Year:</label>
            <input 
              type='number'
              name='year'
              id='year-input'
              value={form.year}
              placeholder='Year'
              onChange={handleChange}
            />
            <label htmlFor="genre-input">Genre:</label>
            <input 
              type='text'
              name='genre'
              id='genre-input'
              value={form.genre}
              placeholder='Genre'
              onChange={handleChange}
            />
            <label htmlFor="photo-upload">
              Add/Change Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={handleChangePhoto}
            />
            <label htmlFor="description-input">Additional Comments:</label>
            <textarea 
              type='text'
              name='description'
              id='description-input'
              value={form.description}
              placeholder='Comment'
              onChange={handleChange}
            />
            <button type='submit'>SUBMIT</button>
          </div>
        }
      </form>
    </main>
  )
}

export default EditRec