export default function Services() {
  const service = [
    {
      id: 1,
      icon: "checkmark-done-outline",
      title: "Verified Members.",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. aliquam dolores iste officiis odit dolore enim quam libero.",
    },
    {
      id: 2,
      icon: "heart-outline",
      title: "Soul mates.",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. aliquam dolores iste officiis odit dolore enim quam libero.",
    },
    {
      id: 3,
      icon: "bulb-outline",
      title: "Easy to use.",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. aliquam dolores iste officiis odit dolore enim quam libero.",
    },
  ];

  return (
    <div className="bg-white flex flex-col lg:flex-row items-center gap-4 md:h-auto w-full py-6 md:py-16">
      {service.map((services) => {
        return (
          <div className="flex px-10" key={services.id}>
            <div className="text-black bg-gray-200 h-[50%] text-4xl p-1 rounded-lg mr-4">
              <ion-icon name={`${services.icon}`}></ion-icon>
            </div>
            <div className="text-black">
              <h2 className="text-4xl font-medium">{services.title}</h2>
              <p className="pt-2">{services.text}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="flex px-10">
        <div className="text-black bg-gray-200 h-[50%] text-4xl p-1 rounded-lg mr-4">
          <ion-icon name="checkmark-done-outline"></ion-icon>
        </div>
        <div className="text-black">
          <h2 className="text-4xl font-medium">Verified Members.</h2>
          <p className="pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            aliquam dolores iste officiis odit dolore enim quam libero? Odit aut
            facere.
          </p>
        </div>
      </div>

      <div className="flex px-10">
        <div className="text-black bg-gray-200 h-[50%] text-4xl p-1 rounded-lg mr-4">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className="text-black">
          <h2 className="text-4xl font-medium">Soul mate guaranteed.</h2>
          <p className="pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            aliquam dolores iste officiis odit dolore enim quam libero? Odit aut
            facere.
          </p>
        </div>
      </div>

      <div className="flex px-10">
        <div className="text-black bg-gray-200 h-[50%] text-4xl p-1 rounded-lg mr-4">
          <ion-icon name="bulb-outline"></ion-icon>
        </div>
        <div className="text-black">
          <h2 className="text-4xl font-medium">Easy to use.</h2>
          <p className="pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            aliquam dolores iste officiis odit dolore enim quam libero? Odit aut
            facere.
          </p>
        </div>
      </div> */}
    </div>
  );
}
