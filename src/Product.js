import React, {useState} from 'react';
import "./Product.css";
import { useStateValue} from './StateProvider';
import { DialogTitle, requirePropFactory } from '@material-ui/core';

function Product(props){
    const { id,title,price,image,rating }=props
const [{basket}, dispatch] = useStateValue();

const [add, setAdd]=useState([]);

const addToBasket = (price) =>{
    console.log("price==>",price);
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
                    <p>🌟</p>
                ))}
                
            </div>
        </div>
        <img alt="Meghan and Harry: The Real Story by [Lady Colin Campbell]"
         src={image} 
        />
        <button onClick={addToBasket} className="button"> Add to Basket</button>
       </div>
         );
}
export default Product;
