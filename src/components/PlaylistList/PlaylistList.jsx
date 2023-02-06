import PlaylistCard from "../PlaylistCard/PlaylistCard";

const PlaylistList = ({ playlists }) => {
  return ( 
    <>  
      <h1>Playlist List</h1>
      {playlists.map(playlist => (
        <PlaylistCard key={playlist._id} playlist={playlist} />
      ))}
    </>
  );
}

export default PlaylistList;