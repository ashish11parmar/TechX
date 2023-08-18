import React from 'react'
import './Profile.css';
import avatar from '../images/avatar.avif';

const Profile = () => {
  return (
    <>
    <div className="userprofile">
      <img src={avatar} width='90px' style={{margin: '10px 0px'}} alt='avatar'/>
      <h4>ASHISH PARMAR</h4>
      <hr style={{border:'0.5px solid black', width:'100%'}}/>
      <h5>MERN Stack Developer</h5>
    </div>
    </>
  )
}

export default Profile