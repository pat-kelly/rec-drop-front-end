import CommentCard from "../CommentCard/CommentCard";

const CommentList = (props) => {
  console.log('COMMENTLIST PROPS', props)

  if(!props.comments.length) return <h3>No comments yet</h3>

  return ( 
    <>  
      <h2>Comments</h2>
      {props.comments.map(comment => (
        <CommentCard key={comment._id} comment={comment}/>
      ))}
    </>
  );
}

export default CommentList;