import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider';








 function Product({title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();


  console.log('this is the basket >>>',basket);



  const addToBasket=()=>{

dispatch({
  type:'ADD_TO_BASKET',

  item: {
     
         title:title,
         image:image,
         price:price,
         rating:rating, 
  },

});
  };

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

      <button onClick={addToBasket} >Add To Basket</button>
    </div>
  )
}

export default Product
