import OwnerDate from "../OwnerDate/OwnerDate";
import styles from "./CommentCard.module.css"
import Icon from "../Icon/Icon";

const CommentCard = (props) => {
  const { recOwner } = props
  return ( 
    <>  
    <div className={styles.commentContainer}>
      <div className={styles.commentTop}>
        <OwnerDate authorInfo={props.comment}/>
        {(props.comment.owner._id === props.user.profile || recOwner._id === props.user.profile) &&
          <div onClick={() => props.handleDeleteComment(props.recId, props.comment._id)}>
            <div className={styles.toolTip}><Icon category='Delete'/></div>
          </div>
        }
      </div>
      <h4 className={styles.commentBottom}>{props.comment.content}</h4>
      </div>
      </>
  );
}

export default CommentCard;