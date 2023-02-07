import styles from './OwnerDate.module.css'

const OwnerDate = ({authorInfo}) => {
  console.log('OWNER DATE Author info ', authorInfo)
  return ( 
    <div className={styles.ownerDateContainer}>  
      <p>{authorInfo.owner.name}</p>
      <p>{authorInfo.createdAt.slice(0, 10)}</p>
    </div>
  );
}

export default OwnerDate;