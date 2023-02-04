import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";


const RecCard = ({rec})  => {
  console.log('RECCARD REC ', rec)

  return ( 
    <>  
      <h2>Rec Card</h2>

    {/* <Link to={`/recs/${rec._id}`}> */}
      <div>
        <h3>{rec.category}</h3>
        <h3>Title: {rec.title}</h3>
        <h3>Creator: {rec.creator}</h3>
        {rec.year ? <h3>Year: {rec.year}</h3> : <></>}
        {rec.genre ? <h3>Genre: {rec.genre}</h3> : <></>}
        {rec.description ? <h3>Year: {rec.description}</h3> : <></>}
        {rec.photo ? <img src={rec.photo} alt={rec.title} style={{width: '300px'}} /> : <></>}
        <h3>(Likes)</h3>
        <h3>(Comments)</h3>
        <OwnerDate rec={rec}/>
      </div>
    {/* </Link> */}


    </>
  )
}

export default RecCard;