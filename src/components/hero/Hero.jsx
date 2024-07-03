import React from 'react'
import "./hero.css"
import dark_arorow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skilled, experiences
                needed to excel in the dynamic field of education </p>
                <button className='btn'>Explore more <img src={dark_arorow} alt="" className='arrow' />
                </button>
        </div>
    </div>
  )
}

export default Hero