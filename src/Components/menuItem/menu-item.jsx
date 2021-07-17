import React from 'react';
import { withRouter } from 'react-router';

import './Menu.scss'
const MenuItem = ({title,size,imageUrl,linkUrl,match,history}) => {
    
    return ( 
     <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className="background-image" style={{
         backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div> );
}
 
export default withRouter(MenuItem);