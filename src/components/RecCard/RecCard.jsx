import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from './RecCard.module.css'

const RecCard = ({rec, user})  => {  
  return ( 
    <>
      <div className={`${styles.recCard} ${rec.show ? '' : `${styles.deleted}`}`}>
        <div className={styles.cardTop}>
          <div className={styles.recCardHeader}>
            <h2>{rec.title}</h2>
            <div className={styles.iconContainer}>
              <Icon category={rec.category}/>
            </div>
          </div>
          <div className={styles.cardSubHeader}>
            <h4>{rec.creator}</h4>
          </div>
          <div>
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
        <div className={styles.footer}>
          <OwnerDate authorInfo={rec}/>
          {(user && rec.show) && 
            <Link to={`/recs/${rec._id}`}>
              More Details
            </Link>
          }
        </div>
      </div>
    </>
  )
}

export default RecCard;