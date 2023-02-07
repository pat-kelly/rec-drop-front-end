import RecCard from "../../components/RecCard/RecCard";
import styles from './RecList.module.css'

const RecList = ({recs, user}) => {
  return ( 
    <main className={styles.main}>  
      <h1>All Recs</h1>
      <div className={styles.container}>
      {recs.map(rec => (
        rec.show &&
        <RecCard key={rec._id} rec={rec} user={user}/>
      ))}
      </div>
    </main>
  );
}

export default RecList;