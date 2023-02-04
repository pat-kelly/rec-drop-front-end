import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "../../components/CommentList/CommentList";
import Likes from "../../components/Likes/Likes";

import * as recService from '../../services/recService'

const RecDetails = () => {
  const {id} = useParams()
  console.log(id)
  const [rec, setRec] = useState(null)

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
            <CommentList/>
            <Likes/>
          </>
        : <h2>Loading...</h2>
      }
    </>
  );
}

export default RecDetails;