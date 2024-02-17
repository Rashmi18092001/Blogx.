import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from '../redux/action';
import '../css/cart.css';


const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    
    const emptyCart = () => {
        return (
            <div className="empty-cart">
                <img src="./images/lib.png" alt="" />
                <h3>Your Library is Empty</h3>
            </div>
        );
    };


    
    return (
        <div className="cart-container">
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map((cartItem)=>(
                 <div className="cart-item" key={cartItem.id}>
                 <div className="item-details">
                     <img  height='300px' width='300px'  src={cartItem.img1} alt={cartItem.title.substring(0,30)} />
                     <div>
                    <h5 class="title">{cartItem.title.substring(0,30)}</h5>
                         <p>{cartItem.date}</p>
                         <p>{cartItem.time} read</p>
                        <button className="red" onClick={() => handleClose(cartItem)} >Remove</button>

                     </div>
                 </div>
             </div>
            ))}
        </div>
    );
 
};

export default Cart;
