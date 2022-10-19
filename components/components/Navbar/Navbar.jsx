import React from 'react';
import {GiHamburgerMenu, GiRotaryPhone} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return(
    <nav className ="app__navbar">
      <div className="app__navbar-logo">
        <img src={'/toques.png'} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {/* <li className="p__opensans"> <a href="#home">Accueil</a></li> */}
        <li className="p__opensans"> <a href="#menu">Menu</a></li>
        <li className="p__opensans"> <a href="#findus">la tournée</a></li>
        <li className="p__opensans"> <a href="#contact">Contact</a></li>
        <li className="p__opensans"> <a href="#about">à propos</a></li>
        <li className="p__opensans"> <a href="#promos">Offres</a></li>
      </ul>
      <div className='app__navbar-login'>
        <GiRotaryPhone color='#fff' fontSize={27} />
        <p style={{marginLeft:"2rem"}} className="p__opensans">07 65 50 72 49</p>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setToggleMenu(true)}}/>

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{setToggleMenu(false)}} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"> <a href="#home" onClick={()=>{setToggleMenu(false)}}>Accueil</a></li>
              <li className="p__opensans"> <a href="#menu" onClick={()=>{setToggleMenu(false)}}>Menu</a></li>
              <li className="p__opensans"> <a href="#findus" onClick={()=>{setToggleMenu(false)}}>la tournée</a></li>
              <li className="p__opensans"> <a href="#contact" onClick={()=>{setToggleMenu(false)}}>contact</a></li>
              <li className="p__opensans"> <a href="#about"onClick={()=>{setToggleMenu(false)}}>à propos</a></li>
              <li className="p__opensans"> <a href="#promos"onClick={()=>{setToggleMenu(false)}}>Offres</a></li>
            </ul>
         </div>
        )}


      </div>
    </nav>
  );
}

export default Navbar;
