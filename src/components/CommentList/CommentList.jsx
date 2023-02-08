import CommentCard from "../CommentCard/CommentCard";
import styles from "./CommentList.module.css"

const CommentList = (props) => {
  console.log('COMMENTLIST PROPS', props)

  if(!props.comments.length) return <h3 className={styles.commentForm}>No comments yet</h3>

  return ( 
    <>  
    <div className={styles.commentForm}>
      <h2 className={styles.test}>Comments</h2>
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