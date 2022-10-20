import React from 'react';

import { SubHeading } from '../../components';

const FindUs = (props) => {
  return(
    <div className="app__bg section__padding" id="findus">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Où nous trouver</h1>

      <div className="app__wrapper_info" id='contactInfo'>

        <div className="app__wrapper-content">
          <div className='app__contact-head'>
            <p className="p__opensans" id='app__findus-header' style={{ marginBottom:"2rem"}} > Aujourd&apos;hui nous sommes :</p>
            <p className="p__cormorant" style={{ color: "#f36f21",fontSize:"2rem", marginBottom:"2rem", fontWeight:"lighter", marginLeft:"2rem"}}>{props.place}</p>
          </div>

          <div className='app__contact-head'>
            <p className="p__contact-day" >Mardi</p>
            <p className="p__opensans">à Boisset-les-Prévanches</p>
          </div>
          <div className='app__contact-dash'/>
          <div className='app__contact-head'>
            <p className="p__contact-day" >Jeudi</p>
            <p className="p__opensans">à Champenard</p>
          </div>
          <div className='app__contact-dash'/>
          <div className='app__contact-head'>
            <p className="p__contact-day" >Vendredi</p>
            <p className="p__opensans">à évreux Faubourg Saint-Léger</p>
          </div>
          <div className='app__contact-dash'/>
          <div className='app__contact-head'>
            <p className="p__contact-day">Samedi</p>
            <p className="p__opensans">à évreux Place du Pouget Navarre</p>
          </div>
          <div className='app__contact-dash'/>
        </div>
        {/* <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button> */}
        <div className="app__wrapper_img" id='app__wrapper_iFrame'>
            <iframe src={props.map}
            style={{ backgroundImage: 'url(/findus.png)'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>


    </div>
  )
}

export default FindUs;
