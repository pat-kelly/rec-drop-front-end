const AddForm = (props) => {
  const { playlist, rec, handlePlaylistExpand } = props

  const form = {
    title: playlist.title,
    recs: [...playlist.recs, rec._id]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handlePlaylistExpand()
    // call update service function 
  }
  
  return (
    <>
      <div>{playlist.title}</div>
      <form onSubmit={handleSubmit}>
        <button>+</button>
      </form>
    </>
  )
}

export default AddForm