import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import RecCard from "../../components/RecCard/RecCard";

import styles from './PlaylistDetails.module.css'
import * as playlistService from '../../services/playlistService'

const PlaylistDetails = ({ user, handleDeletePlaylist }) => {
  const {id} = useParams()
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    const fetchPlaylist = async () => {
      const data = await playlistService.show(id)
      setPlaylist(data)
    }
    fetchPlaylist()
  }, [id])

  return ( 
    <main className={styles.main}> 
      {playlist 
        ? <>
            <h1>{playlist.title}</h1>
            <button onClick={() => handleDeletePlaylist(id)}>
              Delete
            </button>
            <div className={styles.container}>
              {playlist.recs.map(rec => (
                <RecCard key={rec._id} rec={rec} user={user}/>
              ))}
            </div>
          </>
        : <h1>Loading...</h1>
      }
    </main>
  );
}

export default PlaylistDetails;