import PlaylistCard from "../PlaylistCard/PlaylistCard";

const PlaylistList = () => {
  return ( 
    <>  
      <h1>Playlist List</h1>
      {/* map over playlists */}
      <PlaylistCard/>
    </>
  );
}

export default PlaylistList;