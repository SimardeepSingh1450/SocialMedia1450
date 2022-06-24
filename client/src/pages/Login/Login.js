import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import './Login.css'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [errorMessage,setErrorMessage]=useState("")
  let navigate=useNavigate();

  const Login=()=>{
    Axios.post("http://localhost:3001/user/login",{
      username:username,
      password:password
  }).then((response)=>{
      if(response.data.loggedIn){
        localStorage.setItem('loggedIn','true')
        localStorage.setItem('username',response.data.username)
        
        navigate("/");
      }else{
        setErrorMessage(response.data.message)
      }
    })
  }

  if(localStorage.getItem("loggedIn")=='false'){
  return (
    <div className='Login'>
      <h1>Login</h1>
      <div className='LoginForm'>
        <input type='text' placeholder=' Username...' onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
        <input type='password' placeholder=' Password...' onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <button onClick={Login}>Login</button>
        <h4 style={{color:"black"}}>{errorMessage}</h4>
      </div>
    </div>
  )}
  return(<>
  <h1>You are Already Logged In</h1>
  </>)
}

export default Login