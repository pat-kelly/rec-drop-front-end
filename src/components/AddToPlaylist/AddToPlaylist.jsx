import { useState, useEffect } from "react"
import NewPlaylist from "../NewPlaylist/NewPlaylist"
import AddForm from "./AddForm";

const AddToPlaylist = (props) => {
  const { rec, playlistExpand, handlePlaylistExpand, handleAddToPlaylist, handleCreatePlaylist, playlists } = props

  const [filteredPlaylists, setFilteredPlaylists] = useState([])

  useEffect(() => {
    setFilteredPlaylists(
      playlists.filter(playlist => {
        if (playlist) {
          return !playlist?.recs.includes(rec._id)
        } else {
          return playlist
        }
      })
    )
  }, [playlists, rec._id])

  return ( 
    <>
      <button onClick={handlePlaylistExpand}>
        {playlistExpand ? 'x' : '+'}
      </button>
      {playlistExpand && 
        filteredPlaylists.map(playlist => (
          <AddForm 
            key={playlist._id}
            playlist={playlist}
            rec={rec}
            handleAddToPlaylist={handleAddToPlaylist}
            handlePlaylistExpand={handlePlaylistExpand}
            />
        ))
      }
      {playlistExpand && <NewPlaylist 
        rec={rec} 
        handlePlaylistExpand={handlePlaylistExpand}
        handleCreatePlaylist={handleCreatePlaylist}
      />}
    </>
  );
}

export default AddToPlaylist;