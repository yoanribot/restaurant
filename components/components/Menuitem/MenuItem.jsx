import React from 'react';

const MenuItem = ({title, price,  tags}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='app__menuItem-item' style={{color:"#f36f21"}}>{title}</p>
      </div>

      <div className='app__menuitem-dash'/>

      <div className='app__menuitem-price'>
        <p className='app__menuItem-item'>{price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub'>
        <p className='app__menuItem-item_ingredient' style={{color:"#AAA"}}><em>{tags}</em></p>
      </div>
  </div>
);

export default MenuItem;
