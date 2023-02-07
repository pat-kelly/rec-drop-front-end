import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as profileService from '../../services/profileService'

import PlaylistList from '../../components/PlaylistList/PlaylistList'
import { login } from '../../services/authService'
import styles from './Profile.module.css'

const Profile = ({ user, playlists }) => {
  const {id} = useParams()

  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getProfile(id)
      setProfile(profileData)
    }
    fetchProfiles()
  }, [id])

  return (
    <>
      <h1 className={styles.myProfile}>My Profile</h1>
      <h2 className={styles.userName}>{user.name}</h2>
      {profile
        ? <img className={styles.profileImage} src={profile.photo} alt={user.name} style={{width: '300px'}}/>
        : <h2 className={styles.loading}>Loading...</h2>}
      
      <PlaylistList playlists={playlists}/>
    </>
  )
}

export default Profile