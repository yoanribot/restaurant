import React from 'react';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="TO DETERMINE">
    {/* <div className='app__aboutus-overlay flex__center'>
      <img src={'/G.png'} alt="G letter" />
    </div> */}

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={'/spoon.png'} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans' id="p__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
      <img src={'/G.png'} alt="G letter" />
        {/* <img src={'/knife.png'} alt="knife" /> */}
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={'/spoon.png'} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans' id="p__history">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
