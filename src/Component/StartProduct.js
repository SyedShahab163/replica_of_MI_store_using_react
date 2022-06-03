import React from 'react'
// import "../styles/StartProduct"

const StartProduct = (StartProduct) => {
  return (
    <div className='startProduct'>
        <div><a href={StartProduct[0].url}><img src={StartProduct[0].image} alt="1st Product"/></a></div>
      <div>
      <a href={StartProduct[1].url}><img src={StartProduct[1].image} alt="1st Product"/></a>
      <a href={StartProduct[2].url}><img src={StartProduct[2].image} alt="1st Product"/></a>
      <a href={StartProduct[3].url}><img src={StartProduct[3].image} alt="1st Product"/></a>
      </div>
    </div>
  )
}

export default StartProduct
