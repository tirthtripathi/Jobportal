import React from 'react'
import logo from './logo.png'
import './NavbarStyles.css'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import GroupsIcon from '@mui/icons-material/Groups'
import WorkIcon from '@mui/icons-material/Work'
import CallIcon from '@mui/icons-material/Call'
function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <a href="index.html"><img src={logo} alt="logo" /></a>
        </div>

        <div>
          <ul className="nav_item">
            <li><a href="index.html"><HomeIcon fontSize='small' className='icone' />  Home </a></li>
            <li><a href="index.html"><GroupsIcon fontSize='small' className='icone'/> Team Page</a></li>
            <li><a href="index.html"><WorkIcon fontSize='small' className='icone' /> Find Internships</a></li>
            <li><a href="index.html"><CallIcon fontSize='small' className='icone' /> Contact Us</a></li>
            <li><a href="index.html"><InfoIcon fontSize='small' className='icone' /> About Us</a></li>
          </ul>
        </div>
        <div className="login/SignUp">
          <a href="#">
            <button id="Login">Login</button>
          </a>
          <a href="#">
            <button id="Signup">Sign Up</button>
          </a>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
