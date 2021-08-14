import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollections} from '../../Redux/shop/shop.selectors'
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import './collections.scss'

const Collections = ({collections, collection}) =>  (
    <div className="collections-overview">
      {collection.map(({ id, ...otherCollections }) => (
        <PreviewCollection key={id} {...otherCollections} />
      ))}
    </div>
  );

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(Collections);
