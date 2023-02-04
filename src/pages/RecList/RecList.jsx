import RecCard from "../../components/RecCard/RecCard";


const RecList = ({recs}) => {
  console.log(recs)

  return ( 
    <>  
      <h1>Rec List</h1>
      {/* map over rec cards */}
      
        {exampleData.map(rec =>
            <RecCard rec={rec} />   
        )}
    </>
  );
}

export default RecList;