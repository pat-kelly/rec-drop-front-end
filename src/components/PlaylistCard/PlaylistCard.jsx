import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  return ( 
    <>  
      <h3>{playlist.title}</h3>
      <Link to={`/playlist/${playlist._id}`}>
          <button>More Info</button>
      </Link>
    </>
  );
}

export default PlaylistCard;