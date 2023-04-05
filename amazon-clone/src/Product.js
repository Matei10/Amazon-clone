import React from 'react'
import './Product.css'


 function Product() {
  return (
    <div className='product'>
<img  src='https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL400_.jpg' alt='#'/>
      <div className='product_info'>
          <p>SAMSUNG Galaxy Tab A7 Lite 8.7" 32GB WiFi</p>
      </div>

      <p className='product_price'>
       <small>k</small>
       <strong>199.00</strong>
      </p>

      <div className='product_rating'>
          <p>*</p>
          
      </div>

<button>Add To Basket</button>
    </div>
  )
}

export default Product
