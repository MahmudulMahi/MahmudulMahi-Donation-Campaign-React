import DonateCard from "./DonateCard";


const Cards = ({cards}) => {
  console.log(cards)
  return (
    <div className="py-3">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
        {
          cards?.map(card => <DonateCard key={card.id} card={card}></DonateCard>)
        }
      </div>
    </div>
  );
};

export default Cards;