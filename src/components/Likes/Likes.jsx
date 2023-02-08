import { useState } from 'react'
import styles from "./Likes.module.css"

const Likes = (props) => {
  const [alreadyLiked, setAlreadyLiked] = useState((
    props.likes.some(like => {return like.owner === props.user.profile})
  ))

  const handleClick = () => {
    setAlreadyLiked(!alreadyLiked)
    props.handleAddLike()
  }

  return ( 
    <>  
      <button className={styles.likeButton} onClick={handleClick}>
        {alreadyLiked ? 'Unlike' : 'Like'}
      </button>
    </>
  );
}

export default Likes;