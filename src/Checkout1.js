import React from 'react'
import './Checkout.css';
import CheckoutProduct from'./CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


function Checkout1() {
    const [{ basket, user }] = useStateValue();
    console.log(basket);


    return (
        <div className="checkout">
            <div className="checkout__left">
                <div >
                <img className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg?fbclid=IwAR2aPlhAvG9efvBHEQ-50eec1UBp8M8QkAYHoLZheF4aG0RouodIoguA3es
                    "
                    alt=""
                    />
                    </div>
                    {basket.length ===0 ? (
                    <div>
                        <h3>Hello, { user?.email}</h3>
                        <h2 className="checkout__title">
                            Your shopping Basket is Empty
                            </h2>
                            <h6>Go to Amazon Home page then click or select the item you would like to put in cart</h6>
                        
                    </div>) : (
                     <div>
                        <h2 className="checkout__title">
                            Your shopping Basket </h2>
                        {/*Checkout llist product */}
                      
                            <div>
                                              {
                             
                                basket.map(item =>(
                                    <CheckoutProduct
                                    key = {item.id}
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                     />  
                                    
                                ))
                            }
                        </div>
                          
                        
                    </div>)}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout1;
