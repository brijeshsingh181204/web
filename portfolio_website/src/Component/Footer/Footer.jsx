import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2024 graphics designer. All rights reserved.</p>
        <div className='social-media'>
          <a href='https://www.facebook.com/profile.php?id=100093822502291' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://x.com/brijeshsingh_20' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.instagram.com/brijeshsingh_20/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.linkedin.com/in/brijesh-singh-358a5125a/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer