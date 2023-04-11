import React from 'react'
import './Product.css'


 function Product({title,image,price,rating}) {
  return (
    <div className='product'>
<img  src={image} alt='#'/>
      <div className='product_info'>
          <p>{title}</p>
      </div>

      <p className='product_price'>
       <small>k</small>
       <strong>{price}</strong>
      </p>

      <div className='product_rating'>
         
          {Array(rating)
          .fill()
          .map((_,i)=>(
            <p>*</p>
          ))}
      </div>

<button>Add To Basket</button>
    </div>
  )
}

export default Product
