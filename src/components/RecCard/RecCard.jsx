import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from './RecCard.module.css'

const RecCard = ({rec, user})  => {
  // console.log('RECCARD ', rec)
  
  return ( 
    <>
      {user ? 
        <Link className={styles.recCard} to={`/recs/${rec._id}`}>
          <div className={styles.cardTop}>
            <div className={styles.recCardHeader}>
              <h2>{rec.title}</h2>
                <Icon category={rec.category}/>
            </div>
            <div className={styles.cardSubHeader}>
              <h4>{rec.creator}</h4>
              <h4>{rec.likes.length} ♥️</h4>
            </div>
          </div>
          {rec.photo ? <img src={rec.photo} alt={rec.title} style={{maxHeight: '150px'}} /> : <></>}
          <div className="footer">
            <OwnerDate authorInfo={rec}/>
          </div>
        </Link>
        :
        <div className={styles.recCard}>
          <div className={styles.cardTop}>
            <div className={styles.recCardHeader}>
              <h2>{rec.title}</h2>
              <div className={styles.iconContainer}>
                <Icon category={rec.category}/>
              </div>
            </div>
            <div className={styles.cardSubHeader}>
              <h4>{rec.creator}</h4>
              <h4>{rec.likes.length} ♥️</h4>
            </div>
          </div>
          {rec.photo ? <img src={rec.photo} alt={rec.title} style={{maxHeight: '150px'}} /> : <></>}
          <div className="footer">
            <OwnerDate authorInfo={rec}/>
          </div>
        </div>
      }
    </>
  )
}

export default RecCard;