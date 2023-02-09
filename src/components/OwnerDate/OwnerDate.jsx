import styles from "./OwnerDate.module.css"

const OwnerDate = ({authorInfo}) => {
  return ( 
    <div className={styles?.ownerDate}>  
    <div className={styles.ownerDiv}>
      <img className={styles.photo} src={authorInfo.owner.photo} alt={authorInfo.owner.name} />
      <p>{authorInfo.owner.name}</p>
      </div>
      <p>{new Date(authorInfo.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default OwnerDate;