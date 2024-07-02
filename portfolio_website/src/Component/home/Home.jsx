import React from 'react'
import './Home.css'
import { assets } from '../../assets/assets'
const Home = () => {
  return (
    <div id='home' className='home'>
        <img src={assets.brijesh} alt="PixelPerfect Logo" className="home-image" />
        <h1 className="home-title">I am Brijesh Singh , Graphic Designer</h1>
        <p className="intro">Welcome to my portfolio! I'm a passionate graphic designer with a knack for creating stunning visuals and intuitive web experiences. Take a look at my work and let's create something amazing together.</p>
        <p className="home-subtitle">I make your ideas come to life with stunning designs.</p>
        <div className='home-action'>   
            <div className='home-connect'onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"});
      }
      }>Connect with me</div>
        </div>
    </div>
  )
}

export default Home