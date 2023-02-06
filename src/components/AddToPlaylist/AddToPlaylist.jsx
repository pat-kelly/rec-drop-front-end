import NewPlaylist from "../NewPlaylist/NewPlaylist"
import AddForm from './AddToPlaylist/AddForm'

const AddToPlaylist = (props) => {
  const { rec, playlistExpand, handlePlaylistExpand } = props
  return ( 
    <>
      <button onClick={handlePlaylistExpand}>
        {playlistExpand ? 'x' : '+'}
      </button>
      {playlistExpand && 
        props.playlists.map(playlist => (
          <AddForm key={playlist._id} playlist={playlist}/>
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