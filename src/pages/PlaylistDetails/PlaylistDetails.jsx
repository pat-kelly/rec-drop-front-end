import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RecCard from "../../components/RecCard/RecCard";

import * as playlistService from '../../services/playlistService'

const PlaylistDetails = ({ user, handleDeletePlaylist }) => {
  const {id} = useParams()
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    const fetchRec = async () => {
      const data = await playlistService.show(id)
      setPlaylist(data)
    }
    fetchRec()
  }, [id])

  return ( 
    <> 
      {playlist 
        ? <>
          <h1>{playlist.title}</h1>
          <button onClick={() => handleDeletePlaylist(id)}>
            Delete
          </button>
          {playlist.recs.map(rec => (
            <RecCard key={rec._id} rec={rec} user={user}/>
          ))}
        </>
        :
        <h1>Loading...</h1>
      }
    </>
  );
}

export default PlaylistDetails;