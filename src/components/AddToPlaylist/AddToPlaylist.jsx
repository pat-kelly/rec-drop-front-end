import PlaylistList from "../PlaylistList/PlaylistList"
import NewPlaylist from "../NewPlaylist/NewPlaylist"

const AddToPlaylist = (props) => {
  console.log('THIS ONE!!!',props.playlists);
  const { rec, playlistExpand, handlePlaylistExpand } = props
  return ( 
    <>
      <button onClick={handlePlaylistExpand}>
        {playlistExpand ? 'x' : '+'}
      </button>
      {playlistExpand && <PlaylistList playlists={props.playlists}/>}
      {playlistExpand && <NewPlaylist 
        rec={rec} 
        handlePlaylistExpand={handlePlaylistExpand}
      />}
    </>
  );
}

export default AddToPlaylist;