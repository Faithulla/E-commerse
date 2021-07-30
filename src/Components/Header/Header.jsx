import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../FireBase-utils/fireBase";
import CardIcon from "../cardItem/Card-icon/Card-icon";
import "./Header.scss";
import { createStructuredSelector } from "reselect";
import CartDropDown from "../cardItem/Card-DropDown/Card-DropDown";
import { selectCartHidden } from "../../Redux/cart/cart.selectors";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../Redux/user/user.selector";

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
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
