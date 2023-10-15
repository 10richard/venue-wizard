import pricingIcon from "../assets/best-price-icon.svg";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex justify-center items-center pt-32 pb-20 bg-lightblue mb-10"
    >
      <div className="flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-20 w-5/6 justify-around">
        <div className="flex flex-col gap-4 max-[1000px]:w-[325px] w-[450px] pt-8 max-[1000px]:text-center">
          <h1 className="max-[1000px]:text-4xl text-5xl font-bold">
            Savings Without Sneaky Changes
          </h1>
          <p className="opacity-70">
            We believe in honest pricing. That's why we offer fully-transparent
            rates with no surprises at checkout, leaving you with more money in
            your pocket.
          </p>
        </div>

        <img
          className="w-[300px] bg-babyblue rounded-full px-10 pb-10 pt-20"
          src={pricingIcon}
          alt="Best price icon"
        />
      </div>

      {/* Add slanted bg color
      <div className="w-5/6 flex max-[1110px]:gap-16 justify-around items-center">
        <div className="min-[1110px]:w-1/3 min-[1110px]:self-start max-[1110px]:text-center w-5/6">
          <h1 className="text-4xl font-bold mb-6">Tired of hidden fees?</h1>
          <h1 className="max-[1110px]:text-3xl text-4xl font-bold mb-6">
            Savings Without Sneaky Charges.
          </h1>
          <p className="text-lg max-[1300px]:text-sm">
            We believe in honest pricing. That's why we offer fully-transparent
            rates with no surprises at checkout, leaving you with more money in
            your pocket.
          </p>
        </div>
        Change color of coin from black to pink or some shit,
        maybe incorporate different shades
        <img className="" src={pricingIcon} alt="Pricing Icon" />
      </div> */}
    </section>
  );
};

export default Pricing;
