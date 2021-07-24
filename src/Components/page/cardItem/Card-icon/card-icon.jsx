import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from '../../../../Redux/cart/cart.action'
import { ReactComponent as Shopping } from "../../../../assets/shopping.svg";
import "./card-icon.scss";

const CardIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Shopping className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CardIcon);
