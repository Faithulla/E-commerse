import React from 'react';

import './CustomBtn.scss'

const CustomBtm = ({children, ...otherProps}) => {
    return ( 
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomBtm;