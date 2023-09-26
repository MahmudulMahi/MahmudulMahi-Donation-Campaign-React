import React, { useEffect, useState } from 'react';
import DonationData from '../DonationData/DonationData';
import DonetionDetails from '../DonetionDetails/DonetionDetails';

const Donation = () => {

  const [donations,setdonations]=useState([])

  const [noFound,setnoFound]=useState(false)

  const [isshow,setisshow]=useState(false)

  useEffect(()=>{
    const donationItem=JSON.parse(localStorage.getItem('donations'))
    if(donationItem){
      setdonations(donationItem)
    }
    else{
      setnoFound("no data")
    }
    
  },[])
  console.log(isshow)
  return (
    <div>
      {noFound ? <p className='flex items-center justify-center'>{noFound}</p> : 

      <div>
        <div className='grid grid-cols-2 gap-3'>
          {
            isshow ? donations.map(card=> <DonetionDetails key={card.id} card={card}></DonetionDetails>):

            donations.slice(0,4).map(card=> <DonetionDetails key={card.id} card={card}></DonetionDetails>)

          }
        </div>
      </div>}
      <button onClick={()=>setisshow(!isshow)} className='p-5 bg-green-400 block mx-auto rounded-lg my-3'>{isshow ? "Show less" :"see more"}
      </button>
    </div>
  );
};

export default Donation;