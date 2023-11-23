import React from 'react'
import {personalInfo} from './Personalinfo'
import './About.css'
const Tablepage = () => {
  return (
    <>
        {personalInfo.map(({title, description},index)=>
        (
            <li className='listtags' key={index}>
                <span className="table__title">
                    {title}
                </span>
                <span className="table__description">
                    {description}
                </span>
            </li>
        )
        )}
    </>
  )
}

export default Tablepage