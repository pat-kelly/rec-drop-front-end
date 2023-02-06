import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  return ( 
    <>  
      <h1>{playlist.title}</h1>
      {/* Link to /playlist/:id */}
    </>
  );
}

export default PlaylistCard;