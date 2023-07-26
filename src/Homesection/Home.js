import React from 'react'
import './Home.css'
import Detailpart from './Detailpart'
import Sectionpart from './Sectionpart'
import Scrollpart from './Scrollpart'
const Home = () => {
  return (
    <section className="home section" id="home">
    <div className="home__container container grid">
        <div className="home__content grid">
            <Sectionpart/>
            <div className='home__img'></div>
            <Detailpart/>
        </div>
        <Scrollpart/>
    </div>
    </section>
    
  )
}

export default Home