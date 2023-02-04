import RecCard from "../../components/RecCard/RecCard";


const RecList = ({recs}) => {
  console.log('RECLIST ', recs)

  return ( 
    <>  
      <h1>Rec List</h1>
      {/* map over rec cards */}
        <RecCard />   
      
    </>
  );
}

export default RecList;