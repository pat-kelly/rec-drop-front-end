import CommentCard from "../CommentCard/CommentCard";
import styles from "./CommentList.module.css"

const CommentList = (props) => {

  if(!props.comments.length) return <h3 className={styles.noComments}>No comments yet</h3>

  return ( 
    <>  
      <div className={styles.commentsContainer}>
        {props.comments.map(comment => (
          <CommentCard 
            key={comment._id} 
            recId={props.recId}
            user={props.user}
            comment={comment}
            handleDeleteComment={props.handleDeleteComment}
            recOwner={props.recOwner}
          />
        ))}
        </div>
    </>
  );
}

export default CommentList;