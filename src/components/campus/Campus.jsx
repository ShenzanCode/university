import React from 'react'
import "./campus.css"
import gallary_1 from "../../assets/gallery-1.png"
import gallary_2 from "../../assets/gallery-2.png"
import gallary_3 from "../../assets/gallery-3.png"
import gallary_4 from "../../assets/gallery-4.png"
import white_arrow_1 from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className='campus'>
        <div className="garally">
            <img src={gallary_1} alt="" />
            <img src={gallary_2} alt="" />
            <img src={gallary_3} alt="" />
            <img src={gallary_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow_1} alt=""  /></button>
    </div>
  )
}

export default Campus