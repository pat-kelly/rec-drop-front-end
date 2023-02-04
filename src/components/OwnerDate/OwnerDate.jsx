const OwnerDate = ({authorInfo}) => {
  // console.log('OWNER DATE REC ', rec)
  return ( 
    <>  
      <p>{authorInfo.owner.name}</p>
      <p>{authorInfo.createdAt.slice(0, 10)}</p>
    </>
  );
}

export default OwnerDate;