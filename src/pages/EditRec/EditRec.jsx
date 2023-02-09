import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from './EditRec.module.css'

const EditRec = (props) => {

  // state = rec, props = handleUpdateRec, handlePageChange 

  const {state} = useLocation()
  const [form, setForm] = useState(state)
  const [category, setCategory] = useState(state.category)
  const [photoData, setPhotoData] = useState(state)
  const [photoChanged, setPhotoChanged] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    props.handlePageChange()
  }, [])

  // allows file input to be hidden, and triggered by styled button click
  const hiddenFileInput = React.useRef(null)

  const handleClick = evt => {
    hiddenFileInput.current.click()
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
    setPhotoChanged(true)
  }

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateRec(form, photoData.photo)
  }

  const handleCategorySelect = ({ target }) => {
    setCategory(target.value)
    setForm({...form, 'category': target.value})
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
      <form onSubmit={handleSubmit} className={styles.form}>
        {category && <div className={styles.formDiv}>
          <label htmlFor="category-select" className={styles.category}>
            Category:
          </label>
          <select
            required
            name="category"
            id="category-select"
            onChange={handleCategorySelect}
          >
            <option value="">{form.category}</option>
            <option value="Movie">Movie</option>
            <option value="TV Show">TV Show</option>
            <option value="Song">Song</option>
            <option value="Album">Album</option>
            <option value="Book">Book</option>
          </select>
            <label htmlFor="title-input">Title:</label>
            <input 
              required
              type='text'
              name='title'
              id='title-input'
              value={form.title}
              placeholder={`${category} Title`}
              onChange={handleChange}
              autoComplete='off'
            />
            <label htmlFor="creator-input">{displayCreatorLabel()}:</label>
            <input 
              type='text'
              name='creator'
              id='creator-input'
              value={form.creator}
              placeholder={displayCreatorLabel()}
              onChange={handleChange}
              autoComplete='off'
            />
            <label htmlFor="year-input">Year:</label>
            <input 
              type='number'
              name='year'
              id='year-input'
              value={form.year}
              placeholder='Year'
              onChange={handleChange}
              autoComplete='off'
            />
            <label htmlFor="genre-input">Genre:</label>
            <input 
              type='text'
              name='genre'
              id='genre-input'
              value={form.genre}
              placeholder='Genre'
              onChange={handleChange}
              autoComplete='off'
            />
            <label htmlFor="photo-upload">
              Add/Change Photo
            </label>
            <div>
              <div className={styles.upload}>
                <button 
                  className={styles.button} 
                  onClick={handleClick}
                  form=""
                >
                  Choose File
                </button>
                {photoChanged && 
                  <p className={styles.uploadText}>
                     image uploaded
                  </p>}
              </div>
              <input
                type="file"
                id="photo-upload"
                name="photo"
                ref={hiddenFileInput}
                onChange={handleChangePhoto}
                className={styles.fileUpload}
              />
            </div>
            <label htmlFor="description-input">Additional Comments:</label>
            <textarea 
              type='text'
              name='description'
              id='description-input'
              value={form.description}
              placeholder='Comment'
              onChange={handleChange}
              autoComplete='off'
            />
            <button type='submit' className={styles.button}>
              SUBMIT
            </button>
          </div>
        }
      </form>
    </main>
  )
}

export default EditRec