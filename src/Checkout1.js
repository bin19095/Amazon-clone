import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout1() {
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
                    <div>
                        <h2 className="checkout__title">
                            Your shopping Basket
                        </h2>
                    </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
                    
              

            </div>
        </div>
    )
}

export default Checkout1;
