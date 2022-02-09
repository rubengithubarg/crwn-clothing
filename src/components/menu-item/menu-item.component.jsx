import React from 'react';

import './menu-item.styles.scss';

const Menuitem = ({ title, imageUrl, size }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}
   className={`${size} menu-item`}>
   {console.log(size, imageUrl)}
  <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>SHOP NOW</span>
  </div>
</div>
)

export default Menuitem;