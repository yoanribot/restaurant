import React from 'react';

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant' style={{fontFamily: 'var(--font-title)',
    fontWeight: 'lighter'}}>{title}</p>
    <img src={'/spoon.png'} alt="spoon" className='spoon__img'/>
  </div>
);

export default SubHeading;
