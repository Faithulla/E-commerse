import React from 'react';

import './CustomBtn.scss'

const CustomBtm = ({ isGoogleSignIn ,children, ...otherProps}) => {
    return ( 
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
        //Dont fucking left space beetwen sybols idiot
     );
}
 
export default CustomBtm;