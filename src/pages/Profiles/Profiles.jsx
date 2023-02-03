import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

import PlaylistList from '../../components/PlaylistList/PlaylistList'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>My Profile</h1>
      <PlaylistList/>
      {/* {profiles.length ? 
        <>
          {profiles.map(profile =>
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      } */}
    </>
  )
}

export default Profiles