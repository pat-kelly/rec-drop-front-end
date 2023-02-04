import React, { useState } from 'react'


const NewRec = (props) => {
  const [form, setForm] = useState({
    category: 'Movie',
    title: '',
    creator: '',
    year: '',
    genre: ''
  })
  const [category, setCategory] = useState('')

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // update recs state
  }

  return ( 
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-select">Category:</label>
        <select
          required
          name="category"
          id="category-select"
          onChange={handleChange}>
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
          placeholder='Title'
          onChange={handleChange}
        />
        <label htmlFor="creator-input">Creator:</label>
        <input 
          type='text'
          name='creator'
          id='creator-input'
          value={form.creator}
          placeholder='Creator'
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
      </form>
    </main>
  );
}

export default NewRec