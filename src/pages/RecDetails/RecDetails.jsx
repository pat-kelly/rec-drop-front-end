import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "../../components/CommentList/CommentList";
import Likes from "../../components/Likes/Likes";

import * as recService from '../../services/recService'

const RecDetails = () => {
  const {id} = useParams()
  const [rec, setRec] = useState(null)
  const [form, setForm] = useState({
    content: ''
  })

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddRec(form)
  }

  useEffect(() => {
    const fetchRec = async () => {
      const data = await recService.show(id)
      setRec(data)
    }
    fetchRec()
    console.log('REC DETAILS REC ', rec)
  }, [id])

  return ( 
    <>  
      <h1>Rec Details</h1>
      {rec 
        ? <>
            <h1>{rec.title}</h1>
            <h3>Creator: {rec.creator}</h3>
            {rec.year ? <h3>Year: {rec.year}</h3> : <></>}
            {rec.genre ? <h3>Genre: {rec.genre}</h3> : <></>}
            {rec.description ? <h3>Description: {rec.description}</h3> : <></>}
            {rec.photo ? <img src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
            <form onSubmit={handleSubmit}>
              <label htmlFor="content-input">Add A Comment:</label>
              <input 
                type='textarea'
                name='content'
                id='content-input'
                value={form.content}
                placeholder='Comment'
                onChange={handleChange}
              />
              <button type='submit'>SUBMIT</button>
            </form>
            <CommentList/>
            <Likes/>
          </>
        : <h2>Loading...</h2>
      }
    </>
  );
}

export default RecDetails;