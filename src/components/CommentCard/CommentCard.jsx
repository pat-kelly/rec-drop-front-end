import OwnerDate from "../OwnerDate/OwnerDate";

const CommentCard = (props) => {
  console.log(props.comment.owner)
  return ( 
    <>  
      <h4>{props.comment.content}</h4>
      <OwnerDate authorInfo={props.comment}/>
      {props.comment.owner._id === props.user.profile &&
        <button onClick={() => props.handleDeleteComment(props.recId, props.comment._id)}>
          X
        </button>
      }
      <br />
    </>
  );
}

export default CommentCard;