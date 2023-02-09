import { useState } from 'react'
import Icon from '../Icon/Icon'
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
    <div className={styles.likeButton} onClick={handleClick}>
      <Icon 
        category={alreadyLiked ? 'Unlike' : 'Like'} 
      />
    </div>
  );
}

export default Likes;