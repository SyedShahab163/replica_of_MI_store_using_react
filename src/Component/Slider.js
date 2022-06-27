import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic from "./pic.js"
const Slider = ({start}) => {

  return (
    <Carousel>
     {start.map((item) =>(

       <Carousel-Item>
         <img 
         
         className='d-block w-100'
         src={item}
         alt="First slide"/>
       </Carousel-Item>
     ))}
     <Pic/>
    </Carousel>
  )
}

export default Slider
