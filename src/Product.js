import React, {useState} from 'react';
import "./Product.css";
import { useStateValue} from './StateProvider';
import { DialogTitle, requirePropFactory } from '@material-ui/core';

function Product(props){
    const { id,title,price,image,rating }=props
const [{basket}, dispatch] = useStateValue();



const addToBasket = () =>{
 
dispatch({
    type: "ADD_TO_BASKET",
    item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
 
    },

});
};



    return (<div
    className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
    <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill().map((_, i) =>(
                    <p key={i}>🌟</p>
                ))}
                
            </div>
        </div>
        <img style={{width:'200px', height:'200px'}} alt="Meghan and Harry: The Real Story by [Lady Colin Campbell]"
         src={image} 
        />
        <button onClick={addToBasket} className="button"> Add to Basket</button>
       </div>
         );
}
export default Product;
