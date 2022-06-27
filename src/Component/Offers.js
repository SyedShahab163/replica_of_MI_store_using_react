import React from 'react'
import Offer from  "./Offer";
import "../styles/offers.css"
const Offers = ({offer}) => {
  return (
    <div className='OffersSection'>
      {offer.map((item,index)=>(
          <Offer key={item.image} index={index} src={item.image} link={item.url}/>
        )) }
        <h1>{offer[0].image}</h1>
        <img src={offer[2]}/>
    </div>
  )
}

export default Offers
