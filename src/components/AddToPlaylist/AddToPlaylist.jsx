import NewPlaylist from "../NewPlaylist/NewPlaylist"
import AddForm from "./AddForm";
import Icon from "../Icon/Icon";

const AddToPlaylist = (props) => {
  const { rec, playlistExpand, handlePlaylistExpand, handleAddToPlaylist, handleCreatePlaylist, playlists } = props

  // console.log('addToPlaylist', playlists)

  const filteredPlaylist = playlists.filter((p)=>(
    !p.recs.includes(rec._id)
  ))

  return ( 
    <>
      <div onClick={handlePlaylistExpand}>
        <Icon 
          category={playlistExpand ? 'Delete' : 'Add'} 
        />
      </div>
      {playlistExpand && 
        filteredPlaylist.map(playlist => (
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