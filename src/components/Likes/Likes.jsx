import React, { useState, useEffect } from 'react'

const Likes = (props) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false)

  useEffect(() => {
    setAlreadyLiked(props.likes.some(like => {return like.owner === props.user.profile}))
  }, [props.likes, props.user.profile])

  console.log(alreadyLiked);

  return ( 
    <>  
      <button onClick={props.handleAddLike}>
        {alreadyLiked ? 'Unlike' : 'Like'}
      </button>
    </>
  );
}

export default Likes;