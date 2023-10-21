import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // Make navbar change colors on scroll
  return (
    <nav className="navbar mb-[5.5rem]">
      <div
        className={`flex justify-between items-center text-white w-full fixed top-0 z-30 py-3 duration-700 ${
          navbar ? "bg-black bg-opacity-80" : "bg-primary"
        }`}
      >
        <div className="flex justify-between items-center mx-auto w-full px-10">
          <div className="flex justify-between items-center w-full gap-8">
            {/* LEFT SIDE */}
            <a href="#">
              <img
                src={logo}
                alt="Venue wizard logo"
                className="max-w-[200px]"
              />
            </a>

            {/* RIGHT SIDE */}
            <div className="flex justify-between items-center w-full max-[1150px]:hidden">
              <div className="flex justify-between items-center gap-8">
                <ul className="navbar__links flex justify-between gap-10">
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#features">Features</a>
                    {/* Our Promise */}
                  </li>
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#discover">Discover</a>
                  </li>
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#pricing">Pricing</a>
                    {/* No hidden fees. No bs. - tired of hidden fees? */}
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center gap-8">
                <button className="hover:underline">Log In</button>
                <button className="border bg-secondary py-2 px-5 rounded-xl relative hover:-translate-y-1 duration-500">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="min-[1150px]:hidden">
            <img
              className={`w-8 cursor-pointer ${toggle ? "hidden" : null}`}
              src={menu}
              alt="menu"
              onClick={() => {
                setToggle((toggle) => !toggle);
              }}
            />
          </div>
        </div>
      </div>

      {/* MENU MODAL */}
      <div
        className={`fixed right-0 bottom-0 z-40 h-full w-[300px] min-[1150px]:hidden opacity-95 backdrop-blur-md bg-babyblue/80 text-lg ${
          toggle ? "flex-col" : "hidden"
        } `}
      >
        <div className="flex justify-end pr-10 pt-8 mb-10">
          <img
            className="w-8 cursor-pointer"
            src={close}
            alt="close menu"
            onClick={() => {
              setToggle((toggle) => !toggle);
            }}
          />
        </div>

        <ul className="navbar__links flex flex-col items-center gap-8 mb-16">
          <li className="cursor-pointer hover:bg-white p-2.5 rounded-lg duration-200">
            <a href="#features">Features</a>
          </li>
          <li className="cursor-pointer hover:bg-white p-2.5 rounded-lg duration-200">
            <a href="#discover">Discover</a>
          </li>
          <li className="cursor-pointer hover:bg-white p-2.5 rounded-lg duration-200">
            <a href="#pricing">Pricing</a>
            {/* No hidden fees. No bs. - tired of hidden fees? */}
          </li>
        </ul>

        <div className="flex justify-center items-center gap-12">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
