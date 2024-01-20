export default function Jumbo() {
  return (
    <div className="pt-56 bg-gradient-to-r from-red-300 to-pink-400 h-screen">
      <div className="flex flex-rows justify-evenly">
        <div className="">
          <h1 className="text-4xl pb-2 font-bold">TINFANTASY</h1>
          <p className="w-[400px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            magnam quaerat voluptatibus veritatis mollitia, consectetur
            inventore quo commodi tempora.
          </p>
          <button className="p-3 bg-white rounded-md mt-4 transition-all duration-300  hover:bg-gray-200">
            Start now!
          </button>
        </div>

        <div className="w-[300px] relative top-0">
          <img src="src\assets\iphone-copia.png" alt="" />
        </div>
      </div>
    </div>
  );
}
