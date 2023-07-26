import React, { useState } from 'react'
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className='section__title'> Qualification</h2>
            <span className="section__subtitle">
                My Personal Journey
            </span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" :
                     "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon" >
                        </i>
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon">

                        </i>
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Bachelor Of Technology
                                </h3>
                                <span className="qualification__subtitle"> Ajay Kumar Garg Engineering College
                                </span><div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    2020- Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>

                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    10+2 Standard
                                </h3>
                                <span className="qualification__subtitle">CBSE board , SVM Etah 
                                </span><div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    2020- Present
                                </div>

                            </div>
                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">
                                    10 th Standard
                                </h3>
                                <span className="qualification__subtitle">CBSE Board , SVM Etah 
                                </span><div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    2017-18
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">
                                    NA 
                                </h3>
                                <span className="qualification__subtitle"> NA
                                </span><div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                     Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder">

                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification