import React, {useState, useEffect} from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import gifImage from './img/address.gif';
import './Payment.css';

import { db } from './firebase';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(()=>{
        //generate the speccial stripe secret allows us to charge a customer
        const getClientSecret = async ()=>{
            const response = await axios({
                method:'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>', clientSecret);

    const handleSubmit = async (event) => {
        //ddo all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            //paymentIntent = payment confirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket : basket,
                amount : paymentIntent.amount,
                created: paymentIntent.created
            })
        
            
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }

    const handleChange = event =>{
        {/* Listen for changes in the CardElement
        and Display any error as the customer types their card detials
        */}
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                {/*Pyament Section -delivery address*/}
               <h1>
                   Checkout(
                       <Link to="/checkout">
                        {basket?.length} items
                        </Link>
                   )
               </h1>
               
               
                <div className='payment__section'>
                <img  className="image__section" src={gifImage}/>
                    <h3> Delivery Address</h3>
                    
                    <div className="payment__address">
                    <p>
                    {user?.email}
                    </p>
                    <p>
                     Fourth Avenue
                     </p>
                     <p>
                      Sydney, Austraia, NSW
                     </p>
                     </div>
                </div>
            </div>
            <div className='payment__address'>
              
            </div>
            {/* Payment section -Review Items*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3> Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </div>

            </div>
            {/*Payment section - Payment method*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>
                        Payment method
                    </h3>
                </div>
                <div className="payment__details">
                    {/*Strip magic will happen here */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                            renderText={(value) => (
                                <h3> Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}

                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                    {processing ? <p>Processing</p>: "Buy Now"}
                                </span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
