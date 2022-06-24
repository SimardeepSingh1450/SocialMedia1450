import React, { useState } from 'react'
import Axios from 'axios'
import './Upload.css'
import {useNavigate} from 'react-router-dom'

function Upload() {

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState([])

  let navigate=useNavigate();

  const upload=()=>{
   
    const formData=new FormData()
    formData.append("file",image[0])
    formData.append("upload_preset","sa3qpzmd")
    
     Axios.post(`https://api.cloudinary.com/v1_1/dv7jje0bw/image/upload`,
     formData
     ).then((response)=>{
        const fileName=response.data.public_id
        Axios.post("http://localhost:3001/upload",{
          title:title,
          description:description,
        image:fileName,
        author:localStorage.getItem("username")
      }).then(()=>{
        navigate('/')
      })
     })

  }
if(localStorage.getItem("loggedIn")=='true'){
  return (
    <div className='Upload'>
        <div>
            <h1>Create A Post</h1>
      <div className='UploadForm'>
        <input type='text' placeholder=' Title...' onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <input type='text' placeholder=' Description...' onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
        <input type="file" onChange={(e)=>{
            setImage(e.target.files)
        }}/>
        <button onClick={upload}>Upload</button>

      </div>
        </div>
    </div>
  )}

  return(
    <h1>You are not Logged In</h1>
   
  )
}

export default Upload