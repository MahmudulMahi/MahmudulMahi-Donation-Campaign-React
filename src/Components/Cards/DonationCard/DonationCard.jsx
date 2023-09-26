import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationCard = ({ card }) => {

  const { id, picture, category, category_bg, card_bg, text_color, button_bg, title,description,price } = card || {}

  const handleAdd=()=>{
    const addDonation=[]

    const donationItem=JSON.parse(localStorage.getItem('donations'))

    if(!donationItem){
      addDonation.push(card)
      localStorage.setItem('donations',JSON.stringify(addDonation))
      toast('you have applied successfully')
    }
    else{

      const isExits=donationItem.find(card =>card.id ===id)
      if(!isExits){
        addDonation.push(...donationItem,card)
        localStorage.setItem('donations',JSON.stringify(addDonation))
        toast('you have applied successfully')
      }
      else{
        toast('already add')
      }
    
    }
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
      <ToastContainer />
    </div>
  );
};

export default DonationCard;