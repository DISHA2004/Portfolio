import React, { useState } from 'react'
import './Header.css';
const Header = () => {
    const [Toggle , showMenu] = useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
        <a href='index.html' className='nav__logo'> Disha </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className='nav__list grid'>
                <li className='nav__item'>
                    <a href='' className='nav__link active-link '>
                        <i className='uil uil-home nav__icon'>
                        </i>
                        Home
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='' className='nav__link active-link'>
                        <i className='uil uil-user nav__icon'>
                        </i>
                        About 
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='' className='nav__link active-link active-link'>
                        <i className='uil uil-cell nav__icon'>
                        </i>
                        Skills
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='' className='nav__link active-link'>
                    <i class="uil uil-graduation-cap nav__icon"></i>
                        Qualification
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='' className='nav__link active-link'>
                        <i className='uil uil-folder-open nav__icon'>
                        </i>
                        Projects
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='' className='nav__link active-link'>
                        <i className='uil uil-message nav__icon'>
                        </i>
                        Contact
                    </a>
                </li>
            </ul>
            <i className='uil uil-cancel nav__close' onClick={()=> showMenu(!Toggle)}>
            </i>
        </div>
        <div className='nav__toggle' onClick={()=> showMenu(!Toggle)}>
        <i className='uil uil-list-ul '></i>
        </div>
        </nav>
    </header>

  )
}

export default Header