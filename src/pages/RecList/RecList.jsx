import RecCard from "../../components/RecCard/RecCard";


const RecList = ({recs}) => {
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