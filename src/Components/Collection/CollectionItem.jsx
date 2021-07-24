import React from 'react';
import './Collection.scss'
import CustomBtm from '../Custom/CustomBtn/CustomBtn';
const CollectionItem = ({item , addItem}) => {
    const { name , price, imageUrl} = item
    return ( 
        <div className='collection-item'>
            <div className='image' 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomBtm onClick={() => addItem(item)} inverted>ADD TO CART</CustomBtm>
        </div>
     );
}

// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// })
 
export default CollectionItem;