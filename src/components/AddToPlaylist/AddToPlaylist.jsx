import PlaylistList from "../PlaylistList/PlaylistList"
import NewPlaylist from "../NewPlaylist/NewPlaylist"

const AddToPlaylist = (props) => {
  const { rec, playlistExpand, handlePlaylistExpand } = props
  return ( 
    <>
      <button onClick={handlePlaylistExpand}>
        {playlistExpand ? 'x' : '+'}
      </button>
      {playlistExpand && <PlaylistList />}
      {playlistExpand && <NewPlaylist 
        rec={rec} 
        handlePlaylistExpand={handlePlaylistExpand}
      />}
    </>
  );
}

export default AddToPlaylist;