import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center bg-primary text-white w-full fixed top-0 z-30">
        <div className="flex justify-between items-center mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-16">
            <a href="#">
              <img src={logo} alt="Venue wizard logo" className="p-3 w-60" />
            </a>

            <div className="flex justify-between items-center w-full">
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
        </div>
      </div>

      {/* MENU */}

      <div className="mr-10 hidden">
        <img
          className="w-10 h-10 object-contain cursor-pointer"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => {
            setToggle((toggle) => !toggle);
          }}
        />

        <div className={`${toggle ? "flex" : "hidden"}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
