import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {Image} from 'cloudinary-react'
import './Profile.css'
function Profile() {

    const [yourUploads,setYourUploads]=useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:3001/upload/byUser/${localStorage.getItem("username")}`)
        .then((res)=>{
        setYourUploads(res.data);
        }).catch(e=>{
            console.log(e);
        })
    },)

  return (
    <div className='Profile'>
      <h1>Your Profile Pics:</h1>
       {yourUploads.map((val)=>{
        return (<div className='Post'>
      <div className='Image'>
        <Image cloudName="dv7jje0bw" 
        publicId={val.image}/>
        </div>
      <div className='Content'>
        <div className='title'>{val.title} by @{val.username}</div>
        {console.log(val.username)}
        <div className='description'>{val.description}</div>
      </div>
      
      </div>)
      
      })}
      
    </div>
  )
}

export default Profile