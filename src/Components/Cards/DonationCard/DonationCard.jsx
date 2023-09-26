import React from 'react';

const DonationCard = ({ card }) => {

  const { id, picture, category, category_bg, card_bg, text_color, button_bg, title,description,price } = card || {}

  const handleAdd=()=>{
    console.log(card)
    localStorage
  }
  const buttonStyle = {
    // color: ,
    background: button_bg,
  };

  return (
    <div className=''>
      <div className="card  bg-base-100 shadow-xl">
        <figure><img className='w-full h-[700px]' src={picture} alt="Shoes" />
       
        </figure>
        <p className='bg-black opacity-70 w-full h-24 p-4 shadow-md absolute bottom-32 left-0'>

        </p>
        <button onClick={handleAdd} className="btn text-white  w-40 absolute bottom-40 left-0 " style={buttonStyle}>{price}</button>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            
          </h2>
          <p>{description}</p>
        
        </div >
      </div>
    </div>
  );
};

export default DonationCard;