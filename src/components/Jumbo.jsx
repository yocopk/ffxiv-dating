export default function Jumbo() {
  return (
    <section className="bg-gradient-to-r from-red-300 to-pink-400 h-screen pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-black font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            TINFANTASY
          </h1>
          <h2 className="max-w-xl mb-4 text-2xl text-black/60 font-bold tracking-tight leading-none md:text-3xl">
            The Final Fantasy XIV Dating Website
          </h2>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repudiandae non maiores est repellat iste, quam quis,
            minus incidunt ullam maxime magni explicabo aperiam quaerat eos.
          </p>
          <a
            href="#"
            className="group bg-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-translate duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border-[1px] border-black rounded-lg text-base font-medium text-center text-black transition-all hover:border-white hover:bg-white"
          >
            Tell me more..
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="rounded-xl border-b-8 pt-6 border-black"
            src="src\assets\iphone-copia.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}
