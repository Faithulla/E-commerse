import React, { Component } from 'react';
import Collections from '../../Components/CollectionsOverview/collections';
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
        <Collections collection={this.state.collections} />
      </div>
    );
  }
}

export default Shop;
