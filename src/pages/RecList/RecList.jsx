import RecCard from "../../components/RecCard/RecCard";


const RecList = ({recs}) => {
  console.log('RECLIST ', recs)

  return ( 
    <>  
      <h1>Rec List</h1>
      {recs.map(rec => (
        <RecCard key={rec._id} rec={rec} /> 
      ))}
      
    </>
  );
}

export default RecList;