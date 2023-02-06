import NewPlaylist from "../NewPlaylist/NewPlaylist"
import AddForm from "./AddForm";

const AddToPlaylist = (props) => {
  const { rec, playlistExpand, handlePlaylistExpand } = props
  return ( 
    <>
      <button onClick={handlePlaylistExpand}>
        {playlistExpand ? 'x' : '+'}
      </button>
      {playlistExpand && 
        props.playlists.map(playlist => (
          !playlist.recs.includes(rec._id) &&
            <AddForm 
              key={playlist._id}
              playlist={playlist}
              rec={rec}
              handlePlaylistExpand={handlePlaylistExpand}
            />
        ))
      }
      {playlistExpand && <NewPlaylist 
        rec={rec} 
        handlePlaylistExpand={handlePlaylistExpand}
      />}
    </>
  );
}

export default AddToPlaylist;