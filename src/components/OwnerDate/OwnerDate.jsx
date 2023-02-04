const OwnerDate = ({rec}) => {
  console.log('OWNER DATE REC ', rec)
  return ( 
    <>  
      <p>{rec.owner.name}</p>
      <p>{rec.createdAt.slice(0, 10)}</p>
    </>
  );
}

export default OwnerDate;