import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
   <div className='home_container'>
    <img className='home__image'src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" />
   

   <div className="home_row">
    <Product title='Lenovo - 2022 - IdeaPad Flex 5i - 2-in-1'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>
   <Product title='Acer Nitro 5 AN515-57-79TD Gaming Laptop '
     price={5500}
     image={'https://m.media-amazon.com/images/I/81lDOtJRTkL._AC_UL400_.jpg'}
     rating={5}/>
   
   </div>

   <div className="home_row">
  
<Product title='the latpot'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>

<Product title='the latpot'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>

<Product title='the latpot'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>
   
<Product title='the latpot'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>
   
<Product title='the laptop'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>
   </div>

   <div className="home_row">
  
<Product title='the latpot'
     price={5500}
     image={'https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL400_.jpg'}
     rating={5}/>
  
   </div>
   </div>
    </div>
  )
}

export default Home
