import React from 'react'
import ProductReviewsCard from "./ProductReviewsCard"
import "./styles/ProductReviewsCard.css"
const ProductReviewsCard = ({image,index,Price,name,Reviews}) => {
  return (
    <div className='ProductReviewsCard'>
         <image src={image} alt={'${index} review'}/>
           <h5>{Reviews}</h5>
           <span>{name}</span>
              <b>{Price}</b>
    </div>
  )
}

export default ProductReviewsCard
