import React from 'react';

const DonetionDetails = ({ card }) => {
  const { id, picture, category, category_bg, card_bg, text_color, button_bg, title, description, price } = card || {}
  return (
    // <div>
    //   <div className='felx justify-start'>
    //     <div className="card  bg-base-100 shadow-xl">
    //       <figure><img className='' src={picture} alt="Shoes" />

    //       </figure>

    //     <div>
    //     {/* <button className="btn text-white  w-40 absolute bottom-40 left-0 " >{price}</button> */}
    //       <div className="card-body">
    //         <h2 className="card-title">
    //           {title}

    //         </h2>
    //         <p>{description}</p>

    //       </div >
    //     </div>
    //     </div>

    //   </div>
    // </div>
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={picture} alt="Movie" /></figure>
      <div className="card-body">
      <p className="card-title">{category}</p>
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonetionDetails;