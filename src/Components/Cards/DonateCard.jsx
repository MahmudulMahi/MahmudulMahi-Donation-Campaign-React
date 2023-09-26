import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Header/Banner/Banner';

const DonateCard = ({ card,setSearch }) => {

  const { id, picture, category, category_bg, card_bg, text_color, button_bg, title } = card || {}


  const buttonStyle = {
    // color: ,
    background: button_bg,
  };
  return (
    <div>
      <Link to={`/cards/${id}`}>

        <div className="card h-96 bg-base-100 shadow-xl"style={{ backgroundColor: card_bg }}>
          <figure><img className=' w-full h-80' src={picture} alt="Shoes" /></figure>
          <div className="card-body">

          <div className="card-actions">
              <button className=" w-20 h-8 rounded-xl text-white "style={buttonStyle}>{category}</button>
          </div>
            <h2 className="card-title" style={{ color: category_bg }}>{title}</h2>

          </div>
        </div>

      </Link >
    </div >
  );
};

export default DonateCard;