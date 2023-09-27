const Navbar = () => {
  return (
    <nav className="navbar flex justify-between">
      <div className="navbar__logo flex items-center">
        <img
          src="/wizard-favicon.png"
          alt="Venue wizard logo"
          className="w-20"
        />
        <h1 className="text-2xl">VenueWizard</h1>
      </div>
      <ul className="navbar__links flex">
        <li>Discover</li>
        <li>Our Promise</li>
        <li>Pricing</li>
      </ul>
      <div className="navbar__buttons">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
