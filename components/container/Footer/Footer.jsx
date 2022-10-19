import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <div className=" app__footer" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <img src={'/toques.png'} alt="footer_logo" />
        <p className="p__opensans">06 xx xx xx xx</p>
        <p className="p__opensans">lestoques27@gmail.com</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">La tournée (en soirée 18h) :</h1>
        <p className="p__opensans">Mardi : boisset-les-prévanches</p>
        <p className="p__opensans">jeudi : Champenard</p>
        <p className="p__opensans">Vendredi : évreux, Faubourg Saint-léger</p>
        <p className="p__opensans">samedi : évreux, place du Pouget Navarre</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Les toqués de la pizza. Tout droit réservé.</p>
    </div>

  </div>
);

export default Footer;
