import OwnerDate from "../OwnerDate/OwnerDate";
import styles from "./CommentCard.module.css"

const CommentCard = (props) => {
  // console.log(props.comment.owner)
  console.log(props);
  const { recOwner } = props
  return ( 
    <>  
    <div className={styles.commentForm}>
      <h4>{props.comment.content}</h4>
      <OwnerDate authorInfo={props.comment}/>
      {(props.comment.owner._id === props.user.profile || recOwner._id === props.user.profile) &&
        <button onClick={() => props.handleDeleteComment(props.recId, props.comment._id)}>
          X
        </button>
        
      }
      <br />
      </div>
      </>
  );
}

export default CommentCard;