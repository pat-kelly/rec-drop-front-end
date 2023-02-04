import OwnerDate from "../OwnerDate/OwnerDate";
import { Link } from "react-router-dom";


const RecCard = rec  => {
  return ( 
    <>  
      <h2>Rec Card</h2>
     

    <Link to={`/recs/${rec._id}`}>
      <article >
            <h3>{rec.category}</h3>
            <h3>Title: {rec.title}</h3>
            <h3>Creator: {rec.creator}</h3>
            <h3>Year: {rec.year}</h3>
            <h3>Genre: {rec.genre}</h3>
            <h3>Photo: {rec.photo}</h3>
            <h3>Description: {rec.descripqtion}</h3>
            <h3>Likes{rec.likes}</h3>
            <h3>Comments{rec.comments}</h3>
            

      </article>
    </Link>


      <OwnerDate />
    </>
)
}

export default RecCard;