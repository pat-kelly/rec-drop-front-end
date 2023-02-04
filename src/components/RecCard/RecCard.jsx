import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";


const RecCard = ({rec})  => {
  return ( 
    <>  
      <div>
        <h2>{rec.title}</h2>
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