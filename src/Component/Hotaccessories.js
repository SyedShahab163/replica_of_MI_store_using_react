import React from 'react'
import HotItemCard from "./HotItemCard.js"
import  "../styles/Hotaccessories.css"



const Hotaccessories = (music,musicCover,smartDivices,smartDivicesCover,home,homeCover,lifestyle,lifestyleCover,accessoriesmobile,mobileaccessoriesCover) => {
  return (
    <div className='Hotaccessories'>

        <div>
      <img src={musicCover  || smartDivices  || homeCover || lifestyleCover || mobileaccessoriesCover} alt="Cover "/>
      </div>



      {/*---------------2nd */}
      <div>
          {music && music.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>  
             )) }
      </div>
      <div>
          {smartDivices && smartDivices.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>  
             )) }
      </div>
      {home && home.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>  
             )) }
              {lifestyle && lifestyle.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>  
             )) }
              {mobileaccessories && mobileaccessories.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>  
             )) }

             <HotItemCard image=""/>
    </div>
    
  )
}

export default Hotaccessories
