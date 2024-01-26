export default function SubscriptionCard() {
  const card = [
    {
      id: 1,
      title: "Silver",
      price: "4,99€",
      period: "/month",
      service: [
        "5 Match al giorno",
        "10 Messaggi al giorno",
        "10 Like al giorno",
        "Supporto Email",
      ],
    },
  ];

  return (
    <div className="bg-gray-200 w-full flex gap-8 justify-center py-16">
      {card.map((cards) => {
        return (
          <div
            className="w-auto bg-white border-[1px] rounded-xl border-black/30"
            key={cards.id}
          >
            <div className="border-b-[1px] border-black/30 w-full text-center">
              <p className="p-2 text-black text-lg">{cards.title}</p>
            </div>

            <div className="">
              <div className="text-center text-black flex flex-col py-2">
                <h2 className="py-6 px-20 text-black font-bold text-4xl">
                  {cards.price}
                  <span className="text-black/60 font-normal text-3xl">
                    {cards.period}
                  </span>
                </h2>

                {cards.service.map((service, index) => (
                  <p key={index}>{service}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center py-6">
              <button className="px-24 py-3 rounded-xl text-white bg-black text-2xl transition-all hover:bg-black/80">
                Buy now!
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
