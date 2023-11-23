import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="container__title">
          Disha
        </h1>
        <ul className="footer__list">
        <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#project" className="footer__link">Project</a>
          </li>
        </ul>
        <div className="footer__social">
        <a href="https://msng.link/o?_dishagp_=ig" className="footer__social-link" target='_blank'>
        <i class="bx bxl-instagram-alt"></i>
        </a>
        <a href="https://github.com/DISHA2004" className="footer__social-link" target='_blank'>
        <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/disha-gupta-32854a219/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-linkedin"></i>
        </a>
        </div>
        <span className='footer__copy'>
        DishaGupta
        </span>
      </div>
    </footer>
  )
}

export default Footer