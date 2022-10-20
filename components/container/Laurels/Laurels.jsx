import React from 'react';

import { SubHeading } from '../../components';
import { data } from '../../../constants';
import {FaFacebook} from 'react-icons/fa';

// const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
//   <div className="app__laurels_awards-card">
//     <img src={imgUrl} alt="awards" />
//     <div className="app__laurels_awards-card_content">
//       <p className="p__cormorant" style={{ color: '#f36f21' }}>{title}</p>
//       <p className="p__opensans">{subtitle}</p>
//     </div>
//   </div>
// );

const Laurels = () => (
  <div className="app__bg section__padding" id="promos">
    <SubHeading title="Promos" />
    <h1 className="headtext__cormorant">Carte de fidelité</h1>
    <div className="app__wrapper_info" id='info__content'>


      <h1 className="app_laurels-headtext_info">
        10 pizze achetées = 1 pizza offerte !
      </h1>
      <div className='app__laurels-offer'>
        <div className="app__wrapper_img" id="rewardImg"  style={{justifyContent:'flex-start'}}>
          <img src={'/toquesReward.png'} alt="laurels_img" />
          <h1 className='app__laurels-headtext'>+ <a href="https://www.facebook.com">< FaFacebook fill='#2374E1'/></a> </h1>

        </div>
        <div className='app__laurels-offer_info'>
          <p  className="p__opensans" id='laurels-offer_info'>Pour profiter de l&apos;offre c&apos;est très simple : </p>
          <ul >
            <li className="p__opensans">Demandez votre carte de fidélité</li>
            <li className="p__opensans">likez notre page facebook <a href="#">TO DO</a> pour obtenir votre code</li>
            <li className="p__opensans">Et bien sûr n&apos;oubliez pas de la faire tamponner à chaque passage !</li>
          </ul>
        </div>
      </div>

    </div>


  </div>
);

export default Laurels;