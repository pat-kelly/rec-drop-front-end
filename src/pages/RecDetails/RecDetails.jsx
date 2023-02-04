import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "../../components/CommentList/CommentList";
import Likes from "../../components/Likes/Likes";
import NewComment from "../../components/NewComment";
import OwnerDate from "../../components/OwnerDate/OwnerDate";

import * as recService from '../../services/recService'

const RecDetails = () => {
  const {id} = useParams()
  const [rec, setRec] = useState(null)

  const handleAddComment = async (commentData) => {
    const newComment = await recService.createComment(id, commentData)
    setRec({...rec, comments: [...rec.comments, newComment]})
  }

  useEffect(() => {
    const fetchRec = async () => {
      const data = await recService.show(id)
      setRec(data)
    }
    fetchRec()
  }, [id])

  console.log('REC DETAILS REC ', rec)

  return ( 
    <>  
      <h1>Rec Details</h1>
      {rec 
        ? <>
            <h1>{rec.title}</h1>
            <OwnerDate rec={rec}/>
            <h3>Creator: {rec.creator}</h3>
            {rec.year ? <h3>Year: {rec.year}</h3> : <></>}
            {rec.genre ? <h3>Genre: {rec.genre}</h3> : <></>}
            {rec.description ? <h3>Description: {rec.description}</h3> : <></>}
            {rec.photo ? <img src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
            <NewComment handleAddComment={handleAddComment} />
            <CommentList/>
            <Likes/>
          </>
        : <h2>Loading...</h2>
      }
    </>
  );
}

export default RecDetails;