import RecCard from "../../components/RecCard/RecCard";


const RecList = ({recs}) => {
  return ( 
    <>  
      <h1>Rec List</h1>
      <div class="rec-cards">
      {recs.map(rec => (
        <RecCard key={rec._id} rec={rec} /> 
      ))}
      </div>
    </>
  );
}

export default RecList;