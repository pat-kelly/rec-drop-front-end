import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

const RecCard = ({rec, user})  => {
  return ( 
    <>  
      <div class="rec-card">
        <div class="rec-card-content">
        <Icon category={rec.category}/>
        <h3>Creator: {rec.creator}</h3>
        {rec.photo ? <img src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
        <h3>(Likes)</h3>
        <OwnerDate authorInfo={rec}/>
        {user && 
          <Link to={`/recs/${rec._id}`}>
            <button>More Info</button>
          </Link>
        }
        </div>
      </div>
    </>
  )
}

export default RecCard;