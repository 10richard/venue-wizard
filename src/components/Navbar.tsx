import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center bg-primary text-white w-full fixed top-0 z-30 py-3">
        <div className="flex justify-between items-center mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-14">
            {/* LEFT SIDE */}
            <a href="#">
              <img
                src={logo}
                alt="Venue wizard logo"
                className="max-w-[200px]"
              />
            </a>

            {/* RIGHT SIDE */}
            <div className="flex justify-between items-center w-full max-[1060px]:hidden">
              <div className="flex justify-between items-center gap-8">
                <ul className="navbar__links flex justify-between gap-10">
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#discover">Discover</a>
                  </li>
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#features">Features</a>
                    {/* Our Promise */}
                  </li>
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#pricing">Pricing</a>
                    {/* No hidden fees. No bs. - tired of hidden fees? */}
                  </li>
                  <li className="cursor-pointer hover:bg-secondary p-2.5 rounded-lg duration-200">
                    <a href="#support">Support</a>
                    {/* Add live chat - sumn similar to Lysted */}
                    {/* Live chat - "Hi, this isn't really support, but I hope you like this project" */}
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
          <div className="min-[1060px]:hidden">
            <img
              className="w-8 cursor-pointer"
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
        className={`fixed right-0 bottom-0 z-40 h-full w-[300px] min-[1060px]:hidden ${
          toggle ? "flex-col" : "hidden"
        } bg-blueshit`}
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

        <ul className="navbar__links flex flex-col items-center gap-8 text-lg">
          <li className="cursor-pointer hover:bg-secondary hover:text-white p-2.5 rounded-lg duration-200">
            <a href="#discover">Discover</a>
          </li>
          <li className="cursor-pointer hover:bg-secondary hover:text-white p-2.5 rounded-lg duration-200">
            <a href="#features">Features</a>
            {/* Our Promise */}
          </li>
          <li className="cursor-pointer hover:bg-secondary hover:text-white p-2.5 rounded-lg duration-200">
            <a href="#pricing">Pricing</a>
            {/* No hidden fees. No bs. - tired of hidden fees? */}
          </li>
          <li className="cursor-pointer hover:bg-secondary hover:text-white p-2.5 rounded-lg duration-200">
            <a href="#support">Support</a>
            {/* Add live chat - sumn similar to Lysted */}
            {/* Live chat - "Hi, this isn't really support, but I hope you like this project" */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
