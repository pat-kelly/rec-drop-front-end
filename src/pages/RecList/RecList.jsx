import RecCard from "../../components/RecCard/RecCard";

const RecList = ({recs}) => {
  console.log(recs)
  return ( 
    <>  
      <h1>Rec List</h1>
      {/* map over rec cards */}
      <RecCard />
    </>
  );
}

export default RecList;