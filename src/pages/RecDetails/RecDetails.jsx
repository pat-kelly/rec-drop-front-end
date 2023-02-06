import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "../../components/CommentList/CommentList";
import Likes from "../../components/Likes/Likes";
import NewComment from "../../components/NewComment/NewComment";
import OwnerDate from "../../components/OwnerDate/OwnerDate";
import AddToPlaylist from "../../components/AddToPlaylist/AddToPlaylist";

import * as recService from '../../services/recService'

const RecDetails = ({ user }) => {
  const {id} = useParams()
  const [rec, setRec] = useState(null)
  const [playlistExpand, setPlaylistExpand] = useState(false)

  const handleAddComment = async (commentData) => {
    const newComment = await recService.createComment(id, commentData)
    setRec({...rec, comments: [...rec.comments, newComment]})
  }

  const handleAddLike = async () => {
    const updatedRec = await recService.like(id)
    setRec(updatedRec)
  }

  const handleDeleteComment = async (recId, commentId) => {
    await recService.deleteComment(recId, commentId)
    setRec({...rec, comments: rec.comments.filter((c) => c._id !== commentId)})
  }

  const handlePlaylistExpand = () => {
    setPlaylistExpand(!playlistExpand)
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
            <OwnerDate authorInfo={rec}/>
            <h3>Creator: {rec.creator}</h3>
            {rec.year ? <h3>Year: {rec.year}</h3> : <></>}
            {rec.genre ? <h3>Genre: {rec.genre}</h3> : <></>}
            {rec.description ? <h3>Description: {rec.description}</h3> : <></>}
            {rec.photo ? <img src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
            <NewComment 
              handleAddComment={handleAddComment} 
            />
            <CommentList 
              recId={id}
              user={user}
              comments={rec.comments}
              handleDeleteComment={handleDeleteComment}
            />
            <Likes 
              user={user} 
              handleAddLike={handleAddLike} 
              likes={rec.likes}
            />
            <AddToPlaylist 
              user={user} 
              rec={rec} 
              playlistExpand={playlistExpand} 
              handlePlaylistExpand={handlePlaylistExpand} 
            />
          </>
        : <h2>Loading...</h2>
      }
    </>
  );
}

export default RecDetails;