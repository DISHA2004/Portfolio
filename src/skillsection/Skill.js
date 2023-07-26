import React from 'react'
import Backend from './Backend'
import Front from './Front'
import Lang from './Lang'
import './Skill.css'

const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Tech Stack</span>
        <div className="skills__container container grid ">
        <Front/>
        <Backend/>
        <Lang/>
        </div>
    </section>
  )
}

export default Skill