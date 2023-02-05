import PlaylistList from "../PlaylistList/PlaylistList";

const AddToPlaylist = (props) => {
  const { user, playlistExpand, handlePlaylistExpand } = props
  return ( 
    <>
      <button onClick={handlePlaylistExpand}>
        {playlistExpand ? 'x' : '+'}
      </button>
      {playlistExpand && <PlaylistList />}
    </>
  );
}

export default AddToPlaylist;