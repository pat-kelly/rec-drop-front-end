import NewPlaylist from "../NewPlaylist/NewPlaylist"
import AddForm from "./AddForm";
import Icon from "../Icon/Icon";
import styles from './Add.module.css'

const AddToPlaylist = (props) => {
  const { rec, playlistExpand, handlePlaylistExpand, handleAddToPlaylist, handleCreatePlaylist, playlists } = props


  const filteredPlaylist = playlists 
    ? playlists.filter((p)=>(!p.recs.includes(rec._id))) 
    : []

  return ( 
    <>
      <div className={styles.dropContainer}>
        <div onClick={handlePlaylistExpand}>
          <Icon 
            category={playlistExpand ? 'Minus' : 'Add'} 
          />
        </div>
        {playlistExpand && <div className={styles.playlistDropdown}>
          <div className={styles.playlistHeader}>Add to a playlist:</div>
          {filteredPlaylist.map(playlist => (
            <AddForm 
              key={playlist._id}
              playlist={playlist}
              rec={rec}
              handleAddToPlaylist={handleAddToPlaylist}
              handlePlaylistExpand={handlePlaylistExpand}
              />
            ))
          }
          <NewPlaylist 
            rec={rec} 
            handlePlaylistExpand={handlePlaylistExpand}
            handleCreatePlaylist={handleCreatePlaylist}
          />
        </div>
        }
      </div>
    </>
  );
}

export default AddToPlaylist;