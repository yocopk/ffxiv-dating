export default function About() {
  return (
    <div className="bg-white flex flex-col">
      <div className="bg-white pt-36 h-screen">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg">
            <h2 className="mb-4 text-8xl tracking-tight font-bold text-black">
              About FFXIV Connections
            </h2>
            <p className="mb-4 text-black/80">
              Welcome to FFXIV Connections, the ultimate online platform where
              Final Fantasy XIV Online adventurers can forge new bonds, create
              lasting friendships, and embark on exciting journeys together
              within the vast realm of Eorzea.
            </p>
            <p className="text-black/80">
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
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <img
          className="w-80 rounded-lg"
          src="https://images.unsplash.com/photo-1581351123004-757df051db8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <h2 className="text-8xl text-black font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4 text-black/80 font-light">
            At FFXIV Connections, we are dedicated to bringing together the
            passionate and diverse community of FFXIV players. Whether you're
            seeking companionship, friendship, or a romantic connection, our
            platform provides a space to find like-minded individuals who share
            your love for the game.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
      <p className="text-lg mb-4">
        Unlike generic platforms, FFXIV Connections is tailored to the unique
        interests and experiences of the FFXIV community. Here, you can connect
        with fellow adventurers, discuss your favorite in-game moments, and
        build meaningful connections beyond the virtual world.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      <ul className="list-disc ml-6 text-lg mb-4">
        <li>
          Customizable Profiles: Showcase your character and share your FFXIV
          journey.
        </li>
        <li>
          Job and Class Matching: Find individuals who complement your
          playstyle.
        </li>
        <li>
          Event and Raid Planning: Coordinate in-game activities with your new
          companions.
        </li>
        <li>
          Glamour Gallery: Share and appreciate each other's stylish gear sets.
        </li>
        <li>
          RP-Friendly: Connect with role-players and immerse yourself in the
          FFXIV universe.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Join FFXIV Connections Today!</h2>
      <p className="text-lg mb-4">
        Dive into a world of connections and possibilities. Whether you're a
        seasoned warrior or a newcomer to Eorzea, FFXIV Connections is here to
        enhance your journey and make your adventures even more memorable.
      </p>

      <p className="text-lg mb-4">
        Sign up now and start connecting with fellow adventurers on FFXIV
        Connections!
      </p>
    </div>
  );
}
