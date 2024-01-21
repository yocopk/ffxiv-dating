export default function Jumbo() {
  return (
    <div className="pt-56 bg-gradient-to-r from-red-300 to-pink-400 h-screen">
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <div className="px-4">
          <h1 className="text-6xl text-black pb-2 font-bold">TINFANTASY</h1>
          <h2 className="text-4xl mb-2 text-gray-800">
            The Final Fantasy XIV dating web site.
          </h2>
          <p className="w-[400px] text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            magnam quaerat voluptatibus veritatis mollitia, consectetur
            inventore quo commodi tempora.
          </p>
          <div className="flex flex-row justify-center gap-3">
            <button className="p-3 text-black bg-white rounded-md mt-4 transition-all duration-300  hover:bg-gray-200">
              Start now!
            </button>

            <button className="p-3 text-black border-2 border-black rounded-md mt-4 transition-all duration-300 hover:border-white  hover:bg-white">
              Tell me more..
            </button>
          </div>
        </div>

        <div className="mt-6 mx-auto w-[170px] md:w-[300px] md:mt-[-57px]">
          <img src="src\assets\iphone-copia.png" alt="" />
        </div>
      </div>
    </div>
  );
}
