import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
function Subtotal() {
    const [state, dispatch ] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(

                <>
                <p>
                    {/*Part of Homework*/}
                    Subtotal ({state.basket.length} items): <strong> {state.basket.length} </strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>
                    This order contains a gift

                </small>
                </>
            )}
            decimlaScale={2}
            value={0}//part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button> Procee to Checkout</button>
        </div>
    )
}

export default Subtotal
