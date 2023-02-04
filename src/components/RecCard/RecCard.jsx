import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";


const RecCard = ({rec})  => {
  return ( 
    <>  
      <h2>Rec Card</h2>
      <div>
        <h3>{rec.category}</h3>
        <h3>Title: {rec.title}</h3>
        <h3>Creator: {rec.creator}</h3>
        {rec.photo ? <img src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
        <h3>(Likes)</h3>
        <OwnerDate rec={rec}/>
        <Link to={`/recs/${rec._id}`}>
          <button>More Info</button>
        </Link>
      </div>


    </>
  )
}

export default RecCard;