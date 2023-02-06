import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RecCard from "../../components/RecCard/RecCard";
import { Link } from 'react-router-dom';

import * as playlistService from '../../services/playlistService'

const PlaylistDetails = ({ user }) => {
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
          <button>delete</button>
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