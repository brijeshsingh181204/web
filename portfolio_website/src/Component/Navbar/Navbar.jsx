import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-scroll'

const Navbar = () => {

  return (
    <div id='navbar' className='navbar' >
      <img src={assets.logo1} alt="Logo" className="nav-image" />
      <div className="menu">
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Home</Link>
        <Link activeClass='active' to='aboutme' spy={true} smooth={true} offset={0} duration={500} className='menulist'>About me</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={0} duration={500} className='menulist'>Service</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={0} duration={500} className='menulist'>Portfolio</Link>
      </div>
      <div className='nav-connect' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"});
      }
      }>Connect with me</div>
    </div>
  )
}

export default Navbar