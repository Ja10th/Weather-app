import React from 'react'
import Desktop from '../../assets/desktop-w.png'
import Phone from '../../assets/phone-w.png'
import './info.css'

const Infotwo = () => {
  return (
    <div class="display-images">
        <div>
            <img src={Desktop} alt="" />
        </div>
        <div>
            <img src={Phone} alt="" />
        </div>
    </div>
  )
}

export default Infotwo