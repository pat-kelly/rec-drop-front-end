import PlaylistCard from "../PlaylistCard/PlaylistCard";
import styles from './PlaylistList.module.css'

const PlaylistList = (props) => {

  const playlists = props.playlists.length > 0 ? props.playlists : []

  return ( 
    <>  
      <h2 className={styles.playListTitle}>↻  ◃◃  My Playlists  ▹▹   ↻</h2>
      <div className={styles.container}>
        {playlists.map(playlist => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </>
  );
}

export default PlaylistList;