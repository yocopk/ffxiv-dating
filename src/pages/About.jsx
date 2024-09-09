import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white flex flex-col">
      <div className="bg-white pt-16 lg:pt-36 h-screen">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg">
            <h2 className="mb-4 text-6xl lg:text-8xl tracking-tight font-bold text-black">
              About TINFANTASY
            </h2>
            <p className="mb-4 text-lg md:text-2xl text-black/80">
              Welcome to TINFANTASY, the ultimate online platform where
              <b>Final Fantasy XIV Online</b> adventurers can forge new bonds,
              create lasting friendships, and embark on exciting journeys
              together within the vast realm of Eorzea.
            </p>
            <p className="text-black/80 text-lg md:text-2xl">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <img
          className="w-full rounded-lg"
          src="https://images.unsplash.com/photo-1581351123004-757df051db8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="">
          <h2 className="text-6xl text-center lg:text-left lg:text-8xl text-black font-bold my-6 lg:my-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-2xl mb-4 text-black/80 font-light">
            On TINFANTASY, we are dedicated to bringing together the passionate
            and diverse community of <b>Final Fantasy XIV Online</b> players.
            Whether you're seeking companionship, friendship, or a romantic
            connection, our platform provides a space to find like-minded
            individuals who share your love for the game.
          </p>
        </div>
      </div>

      <div className="gap-16 items-center lg:mt-20 py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div>
          <h2 className="text-6xl lg:text-8xl text-center lg:text-left text-black font-bold mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-2xl mb-4 text-black/80 font-light">
            Unlike generic platforms, FFXIV Connections is tailored to the
            unique interests and experiences of the FFXIV community. Here, you
            can connect with fellow adventurers, discuss your favorite in-game
            moments, and build meaningful connections beyond the virtual world.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1599596605228-fc3c191f6436?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:py-24 gap-6">
        <h2 className="text-6xl text-black font-bold mb-4">Key Features</h2>
        <ul className="list-disc text-black/80 font-light ml-6 text-xl mb-4 px-4">
          <li>
            <b>Customizable Profiles:</b> Showcase your character and share your
            FFXIV journey.
          </li>
          <li>
            <b>Job and Class Matching:</b> Find individuals who complement your
            playstyle.
          </li>
          <li>
            <b>Event and Raid Planning:</b> Coordinate in-game activities with
            your new companions.
          </li>
          <li>
            <b>Glamour Gallery:</b> Share and appreciate each other's stylish
            gear sets.
          </li>
          <li>
            <b>RP-Friendly:</b> Connect with role-players and immerse yourself
            in the FFXIV universe.
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center py-12 lg:py-24">
        <h2 className="text-6xl text-black font-bold mb-6 text-center">
          Join FFXIV Connections Today!
        </h2>
        <p className="text-xl mb-4 text-black/80 font-light px-6 lg:px-10">
          Dive into a world of connections and possibilities. Whether you're a
          seasoned warrior or a newcomer to Eorzea, FFXIV Connections is here to
          enhance your journey and make your adventures even more memorable.
        </p>

        <p className="text-xl mb-4 text-black/80 font-light px-6 lg:px-10">
          Sign up now and start connecting with fellow adventurers on FFXIV
          Connections!
        </p>
        <Link
          to="/register"
          className="group bg-black inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg z-10 transition-all hover:bg-black/90"
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
        </Link>
      </div>
    </div>
  );
}
