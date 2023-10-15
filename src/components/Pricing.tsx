import pricingIcon from "../assets/save-money.svg";

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
          className="w-[300px] bg-babyblue/60 rounded-full p-10 border-pink border-4 brightness-110"
          src={pricingIcon}
          alt="Best price icon"
        />
      </div>
    </section>
  );
};

export default Pricing;
