import React, { useState } from 'react'
import './Register.css'
import Axios from 'axios';

function Register() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const register=()=>{
    Axios.post("http://localhost:3001/user/register",{
      username:username,
      password:password
  }).then((response)=>{
      console.log(response);
    })
  }
  return (
    <div className='Register'>
      <h1>Registration</h1>
      <div className='RegisterForm'>
        <input type='text' placeholder=' Username...' onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
        <input type='text' placeholder=' Password...' onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button onClick={register}>Register</button>

      </div>
    </div>
  )
}

export default Register