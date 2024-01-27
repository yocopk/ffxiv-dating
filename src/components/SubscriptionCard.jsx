import { Link } from "react-router-dom";

const SubscriptionCard = ({ cards }) => {
  return (
    <div className="">
      {cards.map((card) => (
        <div
          className="w-auto bg-white border-[1px] rounded-xl border-black/30"
          key={card.id}
        >
          <div className="border-b-[1px] border-black/30 w-full text-center">
            <p className="p-2 text-black text-lg">{card.title}</p>
          </div>

          <div className="">
            <div className="text-center text-black flex flex-col py-2">
              <h2 className="py-4 px-20 text-black font-bold text-4xl">
                {card.price}
                <span className="text-black/60 font-normal text-3xl">
                  {card.period}
                </span>
              </h2>

              {card.service.map((service, index) => (
                <p className="text-black text-sm" key={index}>
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center py-6">
            <button className="px-24 py-3 rounded-xl text-white bg-black text-2xl transition-all hover:bg-black/80">
              <Link to="/payment">Buy now!</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionCard;
