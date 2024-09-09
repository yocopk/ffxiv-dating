/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Aggiungi un listener per l'evento di ridimensionamento
    window.addEventListener("resize", handleResize);

    // Rimuovi il listener quando il componente si smonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let link = [
    { id: 0, name: "HOME", link: "/" },
    { id: 1, name: "NEWS", link: "/progress" },
    { id: 2, name: "SERVICE", link: "/progress" },
    { id: 3, name: "ABOUT", link: "/about" },
    { id: 4, name: "CONTACT", link: "/contact" },
  ];
  return (
    <nav className="fixed bg-white shadow-md left-0 right-0 z-10">
      <div className="bg-white flex md:max-w-[1400px] mx-auto justify-between items-center py-3 px-2">
        <Link to="/" className="flex justify-center items-center gap-3">
          <img className="h-9" src="src\assets\ffxiv-dating-logo.png" alt="" />
          <p className="text-red-400 uppercase font-bold">Tinfantasy</p>
        </Link>

        {/* --------------------- MENU DESKTOP --------------------------------- */}

        <div
          onClick={() => setOpen(!open)}
          className="text-red-400 flex justify-end items-center text-3xl"
        >
          {link.map((links) => {
            return (
              <ul
                className="hidden lg:block text-base font-medium justify-center"
                key={links.id}
              >
                <NavLink
                  className="transition-all hover:text-black px-4 border-red-400 active:text-yellow-500"
                  to={links.link}
                >
                  {links.name}
                </NavLink>
              </ul>
            );
          })}
          <Link
            className="hidden lg:block bg-red-500 text-white ml-4 text-base px-3 py-2 rounded-md transition-all hover:bg-black hover:text-white"
            to="/login"
          >
            Log-In
          </Link>
          <Link
            className="hidden lg:block text-red-400 border-[1px] border-red-400 ml-4 text-base px-3 py-2 rounded-md transition-all hover:bg-black hover:text-white hover:border-black"
            to="/register"
          >
            Sign-Up
          </Link>
          <div className="flex items-center lg:hidden">
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
          </div>
        </div>
      </div>

      {/* --------------------- MENU MOBILE ------------------------------- */}
      <div>
        <ul
          className={`bg-white select-none w-full z-[-1] shadow-md absolute border-t-2 left-0 top-12 p-4 ${
            isMobile ? "flex" : "hidden"
          } flex-col items-center mt-3 transition-all duration-400 ${
            open ? "top-12" : "top-[-500px]"
          }`}
        >
          <Link
            className="bg-red-500 text-white m-4 p-3 rounded-md transition-all hover:bg-black hover:text-white"
            to="/login"
          >
            Log-In
          </Link>
          <p className="text-xs text-black">
            Don't have an account?{" "}
            <span className="text-red-400 cursor-pointer hover:text-black">
              <Link to="/register"></Link>Sign-up now!
            </span>
            <hr className="mt-4" />
          </p>
          {link.map((links) => (
            <li className="p-4" key={links.id}>
              <NavLink
                className="text-red-400 text-md transition-all hover:text-black font-bold"
                to={links.link}
              >
                {links.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
