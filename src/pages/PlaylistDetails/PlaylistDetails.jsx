import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RecCard from "../../components/RecCard/RecCard";

const PlaylistDetails = () => {
  const {id} = useParams()
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    // fetch playlist from id 
    // setPlaylist 
  }, [id])

  return ( 
    <> 
      <h1>Playlist List</h1>
      <button>delete</button>
      {/* map through playlist recs => <RecCard/> */}
    </>
  );
}

export default PlaylistDetails;