import React from 'react'

const ProductReviews = () => {
  return (
    <div className="ProductReviews">
        {productReviews.map((item,index) =>(

<ProductReviews prices={item} mame={item.name} image={item.image} review={item.review} index={index} key={item.image}/>
))}
    </div>
  )
}

export default ProductReviews
