import PlaylistCard from "../PlaylistCard/PlaylistCard";
import styles from './PlaylistList.module.css'

const PlaylistList = ({ playlists }) => {
  return ( 
    <>  
      <h1 className={styles.playList}>↻  ◃◃  Play List  ▹▹   ↻</h1>
      {playlists.map(playlist => (
        <PlaylistCard key={playlist._id} playlist={playlist} />
      ))}
    </>
  );
}

export default PlaylistList;