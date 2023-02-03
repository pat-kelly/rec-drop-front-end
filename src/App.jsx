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

// styles
import './App.css'
import RecList from './pages/RecList/RecList'
import RecDetails from './pages/RecDetails/RecDetails'
import PlaylistDetails from './pages/PlaylistDetails/PlaylistDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
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
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
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
          path='/rec-list'
          element={<RecList/>}
        />
        <Route
          path='/rec-details'
          element={
            // protect route
              <RecDetails/>}
            
        />
        <Route
          path='/playlist-details'
          element={
            // protect route
              <PlaylistDetails/>}
            
        />
      </Routes>
    </>
  )
}

export default App
