import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'

import PlaylistList from '../../components/PlaylistList/PlaylistList'
import { login } from '../../services/authService'

const Profile = ({user}) => {
  const {id} = useParams()

  console.log(user)
  console.log('ID ', id)

  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getProfile(id)
      setProfile(profileData)
    }
    fetchProfiles()
  }, [id])

  console.log('PROFILE ', profile)

  // const profile = profiles.filter(prof => (prof._id === user.profile))
  // console.log('PROFILE ', profile)

  return (
    <>
      <h1>My Profile</h1>
      <h2>{user.name}</h2>
      {profile
        ? <img src={profile.photo} alt={user.name} style={{width: '300px'}}/>
        : <h2>Loading...</h2>}
      
      <PlaylistList/>
    </>
  )
}

export default Profile