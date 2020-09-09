import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
function Header() {
    const[state, dispatch] = useStateValue();
    console.log("from header", state)
    const prices = state.basket.map(bask => bask.price);
    const addPrice =prices => {return prices};
    console.log("Header Console",prices);

    return (
        <nav className="header">
            {/*Logo on the left -> img */}
           <Link to="/home">
               <img
               className="header__logo"
               src="/img/amazon.jpg"
               alt="" 
             />
           </Link>
           <div className="header__search">
           <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
              {/* 3 links*/}
          <div className="header__nav">
            <Link to="/login" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">
                    Hello Binay
                </span>
                <span className="header__optionLineTwo">
                    Sign In
                </span>
                </div>
            
            </Link>
            <Link to="/login" className="header__link">
                <div className="header__option" >            
                 <span className="header__optionLineOne">Returns</span>
                 <span className="header__optionLineTwo">Orders</span>
                 </div> 
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne"> Your  </span>
                    <span className="header__optionLineTwo"> Prime </span>
                </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/*Shopping basket icon */}
                        <ShoppingBasketIcon onClick={addPrice} fontSize="large"/>
                    {/* Number of items in the basket */}
                    <span className="header__optionLineTwo header_basketCount"> {state.basket.length} </span>
                </div>
            </Link>

          </div>
       
        </nav>
    )
}

export default Header
