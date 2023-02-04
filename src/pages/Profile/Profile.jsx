import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

import PlaylistList from '../../components/PlaylistList/PlaylistList'
import { login } from '../../services/authService'

const Profile = ({user}) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  console.log(user.profile)

  // const profile = profiles.filter(prof => (prof._id === user.profile))
  // console.log('PROFILE ', profile)

  return (
    <>
      <h1>My Profile</h1>
      <h2>{user.name}</h2>
      {/* <img src={profile[0].photo} alt={user.name} style={{width: '300px'}}/> */}
      <PlaylistList/>
    </>
  )
}

export default Profile