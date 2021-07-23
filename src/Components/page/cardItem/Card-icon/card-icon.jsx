import React from 'react';
import './card-icon.scss'
import { toggleCartHidden } from '../../../../Redux/cart/cart-action';
import { ReactComponent as ShoppingIcon } from '../../../../assets/shopping.svg'
import { connect } from 'react-redux';

const CardIcon = ({toggleCartHidden}) => {
    return ( 
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
 
export default connect(
    null,
    mapDispatchToProps
)(CardIcon);
