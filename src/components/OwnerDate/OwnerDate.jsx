const OwnerDate = ({authorInfo, styles}) => {
  return ( 
    <div className={styles?.ownerDate}>  
      <p>{authorInfo.owner.name}</p>
      <p>{new Date(authorInfo.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default OwnerDate;