import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

// now from app.js we will pass parameter
const Slider = ({start}) => {
  return (
    // assume parent element of Slider 
    <Carousel fade>
    {start.map((item)=>(
        <Carousel.Item>
        <img 
        className='d-block w-100' 
        src={item} 
        alt="First Slide" 
        />
        </Carousel.Item>
    ))}    
    </Carousel>
    )
}

export default Slider