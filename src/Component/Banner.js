import React from 'react'
// import  Carousel  from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = () => {
  return (
   <Carousel fade>
       
{banner.end.map((item,index)=>(

 <Carousel-Item key={item.image} id="banner" interval={1000} keyboard={true}>
 <img 
         
         className='d-block w-100'
         id="bannerImage"
         src={item.image}
         alt="{'${index}banner'}"/>
 </Carousel-Item>
))}

   </Carousel>
  )
}

export default Banner
