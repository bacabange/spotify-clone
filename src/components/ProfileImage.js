import React from 'react'
import profileImg from '../static/image/profile.png'

function ProfileImage() {
  return (
    <div className="profile-image">
      <img src={profileImg} alt="Profile"/>
    </div>
  )
}

export default ProfileImage
