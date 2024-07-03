import React, { useState } from 'react'
import Nave from './components/navebar/Nave'
import Hero from './components/hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideosPlayer from './components/videosPlayer/VideosPlayer'

const App = () => {

  const [play, setplay]=useState(false)
  return (
    <div>
      <Nave/>
      <Hero/>
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer"/>
        <Program/>
        <About setplay={setplay}/>
        <Title subtitle="Garally" title="Campus Photo"/>
        <Campus/>
        <Title subtitle="testimonials" title="What Students Says"/>
        <Testimonial/>
        <Title subtitle="Contaxt Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
        </div>
        <VideosPlayer play={play} setplay={setplay}/>
    </div>
  )
}

export default App