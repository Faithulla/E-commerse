import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../Redux/cart/cart.action";
import { ReactComponent as Shopping } from "../../../assets/shopping.svg";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../Redux/cart/cart.selectors";
import "./card-icon.scss";

const CardIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Shopping className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
