import React from "react";
import "./Collection.scss";
import CustomBtm from "../Custom/CustomBtn/CustomBtn";
import { addItem } from "../../Redux/cart/cart.action";
import { connect } from "react-redux";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomBtm onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomBtm>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
