import React from 'react'
import "./about.css"
import aboutimg from "../../assets/about.png"
import playicon from "../../assets/play-icon.png"

const About = ({setplay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} alt="" className='about-img' />
            <img src={playicon} alt="" className='play-icon' onClick={()=>{
              setplay(true)
            }} />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow leaders Today </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias id eum voluptas magni asperiores similique, ratione eveniet laudantium unde? Expedita voluptatem accusantium doloribus odio? Tempore explicabo fugit dolore quod incidunt, quia tempora inventore. Quasi eos aliquam dolor magnam officiis optio error dolorem quibusdam excepturi amet. Nihil quasi veniam consequuntur aliquid?</p>
        </div>
    </div>
  )
}

export default About