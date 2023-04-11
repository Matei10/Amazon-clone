import React from 'react'
import logo from './images/logo.png'
import "./Header.css";
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



function Header() {
  return (
    <div className='header'>


  {/* <Link to="/home"> */}
  <a href='/home'>
      <img className='header_logo' src={logo} alt='#'/>
      </a>
    
  {/* </Link> */}




     <div className='header_search'>
      <input className='header_searchInput' type='text'></input>
      <Search className='header_searchIcon'/>
      </div>
      <div className='header_nav'>

        <div className='header_option'>
          <span className='header_optionlineone'>hello geust</span>
          <span className='header_optionlinetwo'>Sign In</span>

        </div>
        <div className='header_option'>
        <span className='header_optionlineone'>Returns</span>
          <span className='header_optionlinetwo'>& Orders</span>
        </div>

         <div className='header_option'>
        <span className='header_optionlineone'>Your</span>
          <span className='header_optionlinetwo'>Prime</span>
        </div>
        <div className='header_optionBasket'>
          <ShoppingBagIcon/>
          <span  className="header_optionlinetwo" /*className="header_basketCount"*/>
            0
          </span>
        </div>





      </div>

      </div>
  )
}

export default Header
