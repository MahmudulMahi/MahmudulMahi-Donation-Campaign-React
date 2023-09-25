import React from 'react';

const DonateCard = ({ card }) => {

  const { id, picture, category, category_bg, card_bg, text_color, button_bg, title } = card || {}
  return (
    <div>
      <div className="relative flex  flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: card_bg }}>

        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex flex-col justify-between ">
          
           <p className="block font-sans text-base font-medium  text-blue-gray-900 antialiased " style={{ color: category_bg }} >
              {category}
            </p>
          
           
           
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased " style={{ color: category_bg }}>
              {title}
              {/* style={{color:category_bg}} */}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DonateCard;