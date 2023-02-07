// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import SmallScreenNav from './components/NavBar/SmallScreenNav'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as recService from './services/recService'
import * as playlistService from './services/playlistService'

// styles
import './App.css'
import RecList from './pages/RecList/RecList'
import RecDetails from './pages/RecDetails/RecDetails'
import PlaylistDetails from './pages/PlaylistDetails/PlaylistDetails'
import NewRec from './pages/NewRec/NewRec'
import EditRec from './pages/EditRec/EditRec'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [recs, setRecs] = useState([])
  const [playlists, setPlaylists] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllRecs = async () => {
      const data = await recService.index()
      setRecs(data)
    }
    fetchAllRecs()
  }, [])

  useEffect(() => {
    const fetchUserPlaylists = async() => {
      const data = await playlistService.index()
      setPlaylists(data)
    }
    fetchUserPlaylists()
  }, [])

  // const handleAddRec = async (recData) => {
  //   const newRec = await recService.create(recData)
  //   setRecs([newRec, ...recs])
  //   navigate('/recs')
  // }

  const handleAddRec = async (recData, photo) => {
    const newRec = await recService.create(recData)
    console.log('newRec from create ', newRec)
    const newRecWithPhoto = await recService.addPic(newRec, photo)
    console.log('NewRecWithPhoto (handleAddRec) ', newRecWithPhoto)
    setRecs([newRecWithPhoto, ...recs])
    navigate('/recs')
  }

  const handleUpdateRec = async (recData) => {
    const updatedRec = await recService.update(recData)
    setRecs(recs.map((r) => recData._id === r._id ? updatedRec : r))
    navigate(`/recs/${recData._id}`)
  }

  const handleDeleteRec = async (id) => {
    const deletedRec = await recService.delete(id)
    setRecs(recs.filter(r => r._id !== deletedRec._id))
    navigate('/recs')
  }

  const handleCreatePlaylist = async (playlistData) =>  {
    const newPlaylist = await playlistService.create(playlistData)
    setPlaylists([newPlaylist, ...playlists])
  }

  const handleAddToPlaylist = async (playlistData, pid) => {
    const updatedPlaylist = await playlistService.update(playlistData, pid)
    setPlaylists(playlists.map((p) => pid === p._id ? updatedPlaylist : p))
  }

  const handleDeletePlaylist = async (id) => {
    const deletedPlaylist = await playlistService.delete(id)
    setPlaylists(playlists.filter(p => p._id !== deletedPlaylist._id))
    navigate(`/profile/${user.profile}`)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {width < 768 ?
        <SmallScreenNav 
          width={width}
          isOpen={isOpen}
          handleOpen={handleOpen}
          user={user}
          handleLogout={handleLogout}
        />
        : <NavBar 
          width={width}
          user={user}
          handleLogout={handleLogout}
      />
      }
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path='/profile/:id'
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} playlists={playlists}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/recs'
          element={<RecList recs={recs} user={user}/>}
        />
        <Route
          path='/recs/:id'
          element={
            <ProtectedRoute user={user}>
              <RecDetails 
                user={user} 
                playlists={playlists}
                handleDeleteRec={handleDeleteRec}
                handleCreatePlaylist={handleCreatePlaylist}
                handleAddToPlaylist={handleAddToPlaylist}
              />
            </ProtectedRoute>}
        />
        <Route 
          path="/recs/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditRec handleUpdateRec={handleUpdateRec} />
            </ProtectedRoute>
          }
        
        />
        <Route
          path='/rec/new'
          element={
            <ProtectedRoute user={user}>
              <NewRec handleAddRec={handleAddRec}/>
            </ProtectedRoute>}
        />
        <Route
          path='/playlist/:id'
          element={
            <ProtectedRoute user={user}>
              <PlaylistDetails 
                user={user}
                handleDeletePlaylist={handleDeletePlaylist}
              />
            </ProtectedRoute>}
        />
      </Routes>
    </>
  )
}

export default App
