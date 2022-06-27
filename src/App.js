// import logo from './logo.svg';
import React from 'react'
import './App.css';
import './PreNavber'
import PreNavber from './PreNavber';
import Navbar from './Component/Navbar.js';
import Slider from './Component/Slider.js';
import {BrowserRouter as Router,Route} from "react-router-dom"
import data from "./data/data.json"
import Offers from './Component/Offers.js';
import Heading from './Component/Heading.js'
import StartProduct from  './Component/StartProduct.js'
import HotaccessoriesMenu from './Component/HotaccessoriesMenu.js'
import Hotaccessories from './Component/Hotaccessories.js'
import ProductReviews from './Component/ProductReviews.js'
import Video from './Component/Video.js'
import Banner from './Component/Banner.js'
import Footer from './Component/Footer.js'
function App() {

  
  return (
    <Router> 
      <PreNavber/>
      <Navbar/>
      <Slider start={data.banner.start}/> 
      <Offers offer={data.offer}/>
      <Heading text="START PRODUCT"/>  
      <StartProduct StartProduct={data.StartProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotaccessoriesMenu/>
      
      <Route  exact path="/music">
       <Hotaccessories music={data.hotaccessories.music} musicCover={data.hotaccessoriesCove .music}/>
      </Route>     
       <Route  exact path="/smartDivices">
       <Hotaccessories smartDivices={data.hotaccessories.smartDivices} smartDivicesCover={data.hotaccessoriesCover.smartDivices}/>
      </Route> 
       <Route  exact path="/lifestyle">
       <Hotaccessories lifestyle={data.hotaccessories.lifestyle} lifestyleCover={data.hotaccessoriesCover.lifestyle}/>
      </Route> 
  
       <Route  exact path="/mobileaccessories">
       <Hotaccessories mobileaccessories={data.hotaccessories.mobileaccessories} mobileaccessoriesCover={data.hotaccessoriesCover.mobileaccessories}/>
      // </Route> 
       <Heading text="ProductReviews"/> 
       <ProductReviews  productReviews={data.productReviews}/> 
     <Heading text="Video"/>
      // <Video video={data.videos}/>
      // <Heading text="IN THE PRESS"/>
         <Banner/> 
         <Footer/>
      </Router>

  );
}

export default App;
