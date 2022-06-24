import React, { useEffect, useState } from 'react'
import './Home.css'
import {Image} from 'cloudinary-react'
import Axios from 'axios'



function Home() {
  const [uploads,setUploads]=useState([]);


  useEffect(()=>{
    if(!localStorage.getItem("loggedIn")){
      localStorage.setItem("loggedIn",'false');
      
    }
  },[])

  useEffect(()=>{
    Axios.get("http://localhost:3001/upload").then((response)=>{
    setUploads(response.data)
    })
  },[])

  

  return (
    <div className='Home'>

      {uploads.map((val)=>{
        return (<div className='Post'>
      <div className='Image'>
        <Image cloudName="dv7jje0bw" 
        publicId={val.image}/>
        </div>
      <div className='Content'>
        <div className='title'>{val.title} by @{val.author}</div>
        <div className='description'>{val.description}</div>
      </div>
      {localStorage.setItem("username",val.author)}
      </div>)
      
      })}
      
    </div>
  )
}

export default Home