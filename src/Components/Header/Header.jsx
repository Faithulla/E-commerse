import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../FireBase-utils/fireBase";
import { connect } from "react-redux";
import CardIcon from "../page/cardItem/Card-icon/card-icon";
import CartDropDown from "../page/cardItem/Card-DropDown/cart-dropdown";

import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="opion" to="/sign">
            SIGN UP
          </Link>
        )}
        <CardIcon />
      </div>
      {
        hidden ? null :  
       <CartDropDown />
      }
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
