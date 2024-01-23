export default function Services() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center gap-4 md:h-auto w-full py-6 md:py-16">
      <div className="flex px-10">
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
      </div>
    </div>
  );
}
