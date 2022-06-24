import './App.css';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Upload from './pages/Upload/Upload'
import Profile from './pages/Profile/Profile'
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/upload' element={<Upload/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      
       </Routes>
    </Router>
    </>
  )
}

export default App;
