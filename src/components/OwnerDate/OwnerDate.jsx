const OwnerDate = ({authorInfo, styles}) => {
  
  return ( 
    <div className={styles?.ownerDate}>  
      <p>{authorInfo.owner.name}</p>
      <p>{new Date(authorInfo.createdAt).toLocaleDateString()}</p>
      <img src={authorInfo.owner.photo} alt={authorInfo.owner.name}/>
    </div>
  );
}

export default OwnerDate;