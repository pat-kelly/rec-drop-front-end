import { Link } from "react-router-dom";
import styles from "./PlaylistCard.module.css"

const PlaylistCard = ({ playlist }) => {
  return ( 
    <>  
      <h3>{playlist.title}</h3>
      <Link to={`/playlist/${playlist._id}`}>
          <button className={styles.playlistMoreInfoButton}>More Info</button>
      </Link>
    </>
  );
}

export default PlaylistCard;