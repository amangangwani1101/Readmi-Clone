import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessioriesMenu.css'
const HotAccessioriesMenu = () => {
  return (
    <div className='HotAccessioriesMenu'>
        <Link className='HotAccessioriesLink' to="/music">Music Store</Link>
        <Link className='HotAccessioriesLink' to="/smartDevice">Smart Devices</Link>
        <Link className='HotAccessioriesLink' to="/home">Home</Link>
        <Link className='HotAccessioriesLink' to="/lifestyle">LifeStyle</Link>
        <Link className='HotAccessioriesLink' to="/mobileAccessories">Mobile Acessories</Link>
    </div>
  )
}

export default HotAccessioriesMenu