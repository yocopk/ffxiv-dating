export default function Footer() {
  const servicesData = [
    { title: "Branding", link: "/" },
    { title: "Design", link: "/" },
    { title: "Marketing", link: "/" },
    { title: "Advertisement", link: "/" },
  ];

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <a key={index} className="link link-hover" href={item.link}>
        {item.title}
      </a>
    ));
  };

  return (
    <footer className="w-full flex flex-col justify-center bg-gradient-to-r from-red-300 to-pink-400">
      <div className="flex flex-wrap gap-10 lg:flex-row items-center justify-between p-10 text-black">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-20 opacity-70"
            src="src/assets/ffxiv-dating-logo-black.png"
            alt=""
          />
          <p className="text-xl font-bold text-black/60">
            TINFANTASY<span className="text-sm">&copy;</span>
          </p>
        </div>

        {Array.from({ length: 4 }).map((_, index) => (
          <nav key={index} className="flex flex-col">
            <header className="footer-title">Services</header>
            {renderNavItems(servicesData)}
          </nav>
        ))}

        <form className="">
          <p className="text-black py-2 font-medium">
            Subscribe to our newsletter!
          </p>
          <input
            className="bg-white p-3 rounded-l-lg"
            type="text"
            placeholder="Enter your email.."
          />
          <button className="bg-black/70 text-white p-3 rounded-r-lg transition-all hover:bg-black">
            Submit
          </button>
        </form>
      </div>

      <div className="text-sm text-black w-full text-center py-5">
        <p>
          &copy; 2023 -{" "}
          <a
            className="underline"
            href="https://github.com/yocopk"
            rel="noreferrer"
            target="_blank"
          >
            Yocopk
          </a>{" "}
          - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
