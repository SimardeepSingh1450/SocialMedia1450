import React, { useEffect ,useState} from 'react'
import './Navbar.css'
function Navbar() {

  const [loggedIn,setLoggedIn]=useState('false');
  useEffect(()=>{
    setLoggedIn(localStorage.getItem("loggedIn"))
  },[localStorage.getItem("loggedIn")])
 

  return(
    <div className='Navbar'>
      <h1 className='lefter'>Social Media App</h1>
      <a href="/">Home</a>
      
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        <a href="/upload">Upload</a>
        <a href="/profile">Profile</a>
        

      
    </div>
  )
  
 
}

export default Navbar