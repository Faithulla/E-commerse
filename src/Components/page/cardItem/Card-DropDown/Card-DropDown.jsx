import React from "react";
import { connect } from "react-redux";
import CustomBtm from "../../../Custom/CustomBtn/CustomBtn";
import CartItem from "../cart-item";
import "./cart-dropdown.scss";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../../Redux/cart/cart.selectors";


const CartDropDown = ({ cartItems , history}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.length ? (
          cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
          <div className="empty-message">Your cart is empty</div> 
        )}
      </div>
      <CustomBtm onClick={() => history.push('./checkout')} >GO TO CHECKOUT</CustomBtm>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
