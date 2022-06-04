// import logo from './logo.svg';
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
function App() {

  
  return (
    <Router> 
      <PreNavber/>
      <Navbar/>
      <Slider start={data.banner.start}/> 
      <Offers Offer={data.offer}/>
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
      </Route>
      <Heading text="ProductReviews"/>
      <ProductReviews/>
      </Router>

  );
}

export default App;
