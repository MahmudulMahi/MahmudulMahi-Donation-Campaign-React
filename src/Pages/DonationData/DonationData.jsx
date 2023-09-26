import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationCard from '../../Components/Cards/DonationCard/DonationCard';

const DonationData = () => {

  const [card,setcard]=useState()

  const {id} =useParams()
  const cards =useLoaderData()
  useEffect(()=>{
    const donationData=cards?.find(card=>card.id===id)

    setcard(donationData)

  },[id,cards])
  console.log(card)

  
  return (
    <div>
      <DonationCard card={card}></DonationCard>
    </div>
  );
};

export default DonationData;