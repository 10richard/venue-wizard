import hero from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section className="hero-section h-[95vh] bg-moreblueshit py-10 flex justify-center">
      <div className="hero-content flex justify-center items-center max-[1060px]:flex-col max-[1060px]:mt-36 w-[80%]">
        <div className="hero-content__text font-bold flex flex-col -mt-36">
          <p className="max-[1060px]:hidden text-xl mb-5">
            Buy and sell with confidence
          </p>
          <h1 className="max-[1060px]:text-3xl text-5xl leading-[1.25]">
            Unlock the{" "}
            <a
              target="_blank"
              className="text-pink"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Magic
            </a>{" "}
            <br />
            of Tickets
          </h1>
          <p className="opacity-60 max-[1060px]:text-xs text-sm mt-8">
            Experience live events, whether it's a heart-pounding concert,{" "}
            <br className="max-[465px]:hidden" /> a captivating theatre
            production, or a thrilling sports match
          </p>
        </div>

        <div className="hero-content__img">
          <img
            className="w-[550px] min-[1060px]:ml-20 max-[1060px]:w-[350px] max-[1060px]:mt-10"
            src={hero}
            alt="Hero banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
