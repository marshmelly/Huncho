import React from 'react'
import ig from './ig.jpeg'
import fb from './fbb.jpeg'
import tiktok from './tiktok.png'
import link from './linkin.png'
import x from './x.jpeg'




const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='footer yoho'>
 <footer style={{textAlign:"center", padding: '2rem 0', backgroundColor:'#f1f1f1', marginTop: 'auto'}}>
 <div className="container fluid row">
 <div className='footer-container col-md-6'>
    <h3 className='yoho'>Find us </h3>
   
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <img src={ig} alt="Instagram" className='footer-image' />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <img src={fb} alt="Facebook" className='footer-image' />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
      <img src={x} alt="X" className='footer-image' />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
      <img src={link} alt="Instagram" className='footer-image' />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <img src={tiktok} alt="Instagram" className='footer-image' />
      </a>
      <h4>On all Social Media platforms for more haircut transformations</h4>
 
  </div>
  <div className="col-md-6">
    <h3 className='yoho'>Quick Links</h3>
    <ul type='none'>
    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
    <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
    </ul>
  
  </div>
  </div> <hr />

 
© {currentYear} Huncho's Shop. All rights reserved.
</footer>

    </div>
 
  )
}

export default Footer;
