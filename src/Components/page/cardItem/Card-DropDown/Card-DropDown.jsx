import React from 'react';
import CustomBtm from '../../../Custom/CustomBtn/CustomBtn';
import './cart-dropdown.scss'

const CartDropDown = () => {
    return ( <div className="cart-dropdown">
        <div className="cart-items">
        </div>
            <CustomBtm>GO TO CHECKOUT</CustomBtm>
    </div> );
}
 
export default CartDropDown;