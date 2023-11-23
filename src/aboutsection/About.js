import React from 'react'
import Img from '../assets/profilepic.jpg'
import Resume from '../assets/latest Pers_Resume 1.pdf'
import Introdetails from './Introdetails'
import './About.css'
import Tablepage from './Tablepage'
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>
        <div className="about__container container grid ">
            <img src={Img} alt="" className="about__img" />
            <div className="about__data">
            <Introdetails/>
            <p className="about__description">
                <ul className='info__det grid'>
                  <Tablepage/>
                </ul>
            </p>
            <a download='' href={Resume} className="button button--flex">
            Download Resume 
            <i class="uil uil-file-download laodsymbol"></i></a>
            </div>
        </div>
    </section>
  )
}

export default About