const OwnerDate = ({authorInfo, styles}) => {
  console.log('OWNER DATE Author info ', authorInfo)
  return ( 
    <div className={styles?.ownerDate}>  
      <p>{authorInfo.owner.name}</p>
      <p>{authorInfo.createdAt.slice(0, 10)}</p>
    </div>
  );
}

export default OwnerDate;