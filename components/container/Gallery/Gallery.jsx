import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300
    }else{
      current.scrollLeft += 300
    }
  }

  const galleryImages = ['/gallery01.png', '/gallery02.png', '/gallery03.png', '/gallery04.png']

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo gallery</h1>
        <p className='p__opensans' style={{color:"#AAA", marginTop:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index)=> (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')} />
        </div>
      </div>
    </div>
);
}

export default Gallery;
