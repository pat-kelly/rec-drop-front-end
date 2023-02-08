import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import CommentList from "../../components/CommentList/CommentList";
import Likes from "../../components/Likes/Likes";
import NewComment from "../../components/NewComment/NewComment";
import OwnerDate from "../../components/OwnerDate/OwnerDate";
import AddToPlaylist from "../../components/AddToPlaylist/AddToPlaylist";
import styles from "./RecDetails.module.css"

import * as recService from '../../services/recService'

const RecDetails = ({ user, playlists, handleDeleteRec, handleAddToPlaylist, handleCreatePlaylist }) => {
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
      <h1 className={styles.h1}>Rec Details</h1>
      {rec 
        ? <>
            <h2 className={styles.h2}>Title: {rec.title}</h2>
            <OwnerDate styles={styles} authorInfo={rec}/>
            <h3 className={styles.h3}>Creator: {rec.creator}</h3>
            {rec.year ? <h3 className={styles.h3}>Year: {rec.year}</h3> : <></>}
            {rec.genre ? <h3 className={styles.h3}>Genre: {rec.genre}</h3> : <></>}
            {rec.description ? <h3 className={styles.h3}>Description: {rec.description}</h3> : <></>}
            {rec.photo ? <img className={styles.img}src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
            {rec.owner._id === user.profile &&
              <>
                <Link to={`/recs/${id}/edit`} state={rec}>
                  <button className={styles.button}>Edit</button></Link>
                <button className={styles.button} onClick={() => handleDeleteRec(id)}>
                  Delete
                </button>
              </>
            }
            <NewComment 
              handleAddComment={handleAddComment} 
            />
            <CommentList 
              recId={id}
              user={user}
              comments={rec.comments}
              handleDeleteComment={handleDeleteComment}
              recOwner={rec.owner}
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
              playlists={playlists}
              handleAddToPlaylist={handleAddToPlaylist}
              handleCreatePlaylist={handleCreatePlaylist}
            />
          </>
        : <h2 className={styles.h2}>Loading...</h2>
      }
    </>
  );
}

export default RecDetails;