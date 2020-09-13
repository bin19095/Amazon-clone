import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
import amazon from './img/amazon.JPG';
function Header() {
    const[{basket, user}] = useStateValue();
    //{basket, user instead of state}
const handleAuthentication = () => {
   console.log("authBefore",auth.signOut());
    if(user){
        auth.signOut();
        
    }
}

    return (
        <div>
        <nav>
        <div className="header">
        
            {/*Logo on the left -> img */}
            <Link to="/">
               <img
               className="header__logo"
               src={amazon}
               alt="AMAZON"
               style={{color:"white"}} 
             />
           </Link>
           <div className="header__search">
           <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
              {/* 3 links*/}
          <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
              <div 
              onClick={ handleAuthentication }
              className="header__option">
                <span className="header__optionLineOne">
                Hello {!user ? "Guest!" : user?.email }  
                </span>
                <span className="header__optionLineTwo">
                   {console.log("header user status",user)}
                   {user ? 'Sign Out' : 'Sing In'}
                   
                </span>
                </div>
            
            </Link>
            <Link to="/orders" className="header__link">
                <div className="header__option" >            
                 <span className="header__optionLineOne">Returns</span>
                 <span className="header__optionLineTwo">Orders</span>
                 </div> 
            </Link>
            <Link to="/prime" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne"> Your  </span>
                    <span className="header__optionLineTwo"> Prime </span>
                </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/*Shopping basket icon */}
                        <ShoppingBasketIcon  fontSize="large" />
                    {/* Number of items in the basket */}
                    <span className="header__optionLineTwo header_basketCount"> {basket.length} </span>
                </div>
            </Link>

          </div>
       
     
        </div>
        </nav>
        </div>
    )
}

export default Header
