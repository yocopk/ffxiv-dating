export default function About() {
  return (
    <div className="bg-white flex flex-col justify-center items-cente">
      <div className="flex gap-10 px-40 justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-red-400/70">
            About FFXIV Connections
          </h2>
          <p className="pr-24 pt-4 text-black/70">
            Welcome to FFXIV Connections, the ultimate online platform where
            Final Fantasy XIV Online adventurers can forge new bonds, create
            lasting friendships, and embark on exciting journeys together within
            the vast realm of Eorzea.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 pt-32">
          <img src="https://picsum.photos/200" alt="" />
          <img src="https://picsum.photos/200" alt="" />
          <img src="https://picsum.photos/200" alt="" />
          <img src="https://picsum.photos/200" alt="" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        At FFXIV Connections, we are dedicated to bringing together the
        passionate and diverse community of FFXIV players. Whether you're
        seeking companionship, friendship, or a romantic connection, our
        platform provides a space to find like-minded individuals who share your
        love for the game.
      </p>

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
