import React from 'react';
import { connect } from 'react-redux';
import CustomBtm from '../../../Custom/CustomBtn/CustomBtn';
import CartItem from '../cart-item';
import './cart-dropdown.scss'

const CartDropDown = ({cartItems}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomBtm>GO TO CHECKOUT</CustomBtm>          
        </div>      
     );
}
 
const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);