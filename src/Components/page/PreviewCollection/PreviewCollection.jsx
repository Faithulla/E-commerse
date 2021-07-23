import React from "react";
import CollectionItem from "../../Collection/CollectionItem";
import './PreviewCollection.scss'
const PreviewCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItem}) => (
          <CollectionItem key={id} {...otherItem}/>
        ))}    
      </div>
    </div>
  );
};

export default PreviewCollection;
