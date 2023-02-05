import { useState } from 'react'

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
      <button onClick={handleClick}>
        {alreadyLiked ? 'Unlike' : 'Like'}
      </button>
    </>
  );
}

export default Likes;