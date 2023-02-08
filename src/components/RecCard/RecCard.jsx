import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from './RecCard.module.css'

const RecCard = ({rec, user})  => {  
  return ( 
    <>
      {user && rec.show ? 
        <Link className={`${styles.recCard} ${styles.link}`} to={`/recs/${rec._id}`}>
          <div className={styles.cardTop}>
            <div className={styles.recCardHeader}>
              <h2>{rec.title}</h2>
              <div className={styles.iconContainer}>
                <Icon category={rec.category}/>
              </div>
            </div>
            <div className={styles.cardSubHeader}>
              <h4>{rec.creator}</h4>
              <div className={styles.subRight}>
                <h4>{rec.comments.length}</h4>
                <Icon category='CommentEmoji' />
                <h4>{rec.likes.length}</h4>
                <Icon category='LikeEmoji' />
              </div>
            </div>
          </div>
          <div className="footer">
            <OwnerDate authorInfo={rec}/>
          </div>
        </Link>
        :
        <div className={`${styles.recCard} ${styles.deleted}`}>
          <div className={styles.cardTop}>
            <div className={styles.recCardHeader}>
              <h2>{rec.title}</h2>
              <div className={styles.iconContainer}>
                <Icon category={rec.category}/>
              </div>
            </div>
            <div className={styles.cardSubHeader}>
              <h4>{rec.creator}</h4>
              {rec.show && 
                <div className={styles.subRight}>
                  <h4>{rec.comments.length}</h4>
                  <Icon category='CommentEmoji' />
                  <h4>{rec.likes.length}</h4>
                  <Icon category='LikeEmoji' />
                </div>
              }
            </div>
          </div>
          <div className="footer">
            <OwnerDate authorInfo={rec}/>
          </div>
        </div>
      }
    </>
  )
}

export default RecCard;