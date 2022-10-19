import React from 'react';
import {SubHeading, MenuItem} from "../../components"
import {data} from "../../../constants"

const SpecialMenu = () => (
  <div className='app__bg'>
    <div className='app__specialMenu flex__center section__padding' id="menu">
      <div className='app__specialMenu-title'>
        <SubHeading title="Notre Menu pour vos papilles"/>
        <h1 className='headtext__cormorant'>Nos Pizze</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Pizza Classique</p>
          <div className='app__specialMenu-menu_items'>
            {data.classic.map((pizza, index)=>(
              <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags}/>
            ))}
          </div>
        </div>

          <div className='app__specialMenu-menu_img'>
            <img src={'/menu.png'} alt="menu img" />
          </div>

          <div className='app__specialMenu-menu_cocktails flex__center'>
            <p className='app__specialMenu-menu_heading'>Pizza Crème Fraîche</p>
            <div className='app__specialMenu-menu_items'>
              {data.cream.map((pizza, index)=>(
                <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags}/>
              ))}
            </div>
            <p className='app__specialMenu-menu_heading'>Pizza Di Bufala</p>
            <div className='app__specialMenu-menu_items'>
              {data.bufala.map((pizza, index)=>(
                <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags}/>
              ))}
            </div>
            <p className='app__specialMenu-menu_heading'>Suppléments</p>
            <div className='app__specialMenu-menu_items'>
              {data.supp.map((pizza, index)=>(
                <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price}/>
              ))}
            </div>
            <div style={{marginTop:"15px"}}>
              <button style={{marginTop: "1rem"}}className='custom__button' type='button'><a  href={'/flyer.pdf'} download>Télécharger le Menu</a></button>

            </div>
        </div>
      </div>

    </div>
  </div>

);

export default SpecialMenu;
