import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
   <div className='home_container'>
    <img className='home_img'src="" alt=""/>
   

   <div className="home_row">
    <Product/>
    <Product/>
   </div>

   <div className="home_row">
   <Product/>
    <Product/>
    <Product/>
   
   </div>

   <div className="home_row">
   <Product/>
 
  
   </div>
   </div>
    </div>
  )
}

export default Home
