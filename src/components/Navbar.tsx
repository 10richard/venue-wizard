const Navbar = () => {
  return (
    <nav className="navbar sticky flex justify-between bg-primary text-white items-center w-full">
      <div className="navbar__logo flex items-center">
        <img
          src="/wizard-favicon.png"
          alt="Venue wizard logo"
          className="w-20"
        />
        <h1 className="text-2xl">
          Venue<span className="text-secondary">Wizard</span>
        </h1>
      </div>
      <ul className="navbar__links flex">
        <li className="-ml-18 cursor-pointer">Discover</li>
        <li className="mx-10 cursor-pointer">Our Promise</li>
        <li className="cursor-pointer">Pricing</li>
      </ul>
      <div className="navbar__buttons">
        <button className="border bg-secondary py-2 px-6 rounded-xl">
          Log In
        </button>
        <button className="ml-8 mr-10">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
