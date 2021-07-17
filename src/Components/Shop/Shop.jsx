import React, { Component } from 'react';
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import SHOP_DATA from "./Shop_data";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollections }) => (
          <PreviewCollection key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default Shop;
