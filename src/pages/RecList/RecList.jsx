import RecCard from "../../components/RecCard/RecCard";

const RecList = () => {

  const exampleData = [{
    "title": "fake title",
    },
    {
      "title": "fake title2",
    }
]


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