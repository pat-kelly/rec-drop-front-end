import RecCard from "../../components/RecCard/RecCard";


const RecList = ({recs, user}) => {
  return ( 
    <>  
      <h1>Rec List</h1>
      <div class="rec-cards">
      {recs.map(rec => (
        rec.show &&
        <RecCard key={rec._id} rec={rec} user={user}/>
      ))}
      </div>
    </>
  );
}

export default RecList;