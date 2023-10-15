const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-20 bg-primary text-white pt-16 pb-5">
      <div className="flex max-[1000px]:flex-col max-[1000px]:gap-10 gap-28 w-5/6">
        <div className="border-white border-x-2 px-6 w-[250px]">
          <h1 className="text-xl font-bold mb-4">Our Company</h1>
          <div className="flex flex-col gap-1">
            <p className="text-sm cursor-pointer w-fit">About Us</p>
            <p className="text-sm cursor-pointer w-fit">Partners</p>
            <p className="text-sm cursor-pointer w-fit">Affiliate Program</p>
            <p className="text-sm cursor-pointer w-fit">Careers</p>
          </div>
        </div>
        <div className="border-white border-x-2 px-6 w-[250px]">
          <h1 className="text-xl font-bold mb-4">Social</h1>
          <div className="flex flex-col gap-1">
            <p className="text-sm cursor-pointer w-fit">Twitter</p>
            <p className="text-sm cursor-pointer w-fit">Instagram</p>
            <p className="text-sm cursor-pointer w-fit">Facebook</p>
          </div>
        </div>
        <div className="border-white border-x-2 px-6 w-[250px]">
          <h1 className="text-xl font-bold mb-4">Support</h1>
          <div className="flex flex-col gap-1">
            <p className="text-sm cursor-pointer w-fit">Contact Us</p>
            <p className="text-sm cursor-pointer w-fit">Community</p>
            <p className="text-sm cursor-pointer w-fit">FAQ</p>
          </div>
        </div>
      </div>
      <div>
        <h1>
          @2023 VenueWizard by{" "}
          <a target="_blank" href="https://github.com/10richard/venue-wizard">
            10richard
          </a>
        </h1>
      </div>
      {/* Get inspo from ticket sits such as vividseats */}
    </footer>
  );
};

export default Footer;
