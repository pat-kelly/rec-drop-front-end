import PlaylistCard from "../PlaylistCard/PlaylistCard";
import styles from './PlaylistList.module.css'

const PlaylistList = ({ playlists }) => {
  return ( 
    <>  
      <h1 className={styles.playListTitle}>↻  ◃◃  My Playlists  ▹▹   ↻</h1>
      <div className={styles.container}>
        {playlists.map(playlist => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </>
  );
}

export default PlaylistList;