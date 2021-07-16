import React from 'react';

import './Menu.scss'
const MenuItem = ({title, image, size}) => {
    
    return ( 
     <div className={`${size} menu-item`}>
        <div className="background-image" style={{
         backgroundImage: `url(${image})`
        }}>
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div> );
}
 
export default MenuItem;