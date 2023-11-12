import heroTickets from "../assets/hero-img.png";
import heroBackground from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="hero-section h-[85vh] bg-lightblue pt-8 flex justify-center relative -mt-[14px]">
      <div className="hero-content flex items-center max-[1300px]:justify-around max-[1300px]:flex-col max-[1300px]:mt-36 w-[80%]">
        <img
          className="absolute top-0 right-0 h-full rounded-l-[300px] max-[1300px]:hidden"
          src={heroBackground}
          alt=""
        />
        <div className="hero-content__text font-bold flex flex-col -mt-36">
          <p className="max-[1300px]:text-lg text-xl mb-5">
            Buy and sell with confidence
          </p>
          <h1 className="max-[1300px]:text-3xl text-5xl leading-[1.25]">
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
          <p className="opacity-60 max-[1300px]:text-xs text-sm mt-8">
            Experience live events, whether it's a heart-pounding concert,{" "}
            <br className="max-[465px]:hidden" /> a captivating theatre
            production, or a thrilling sports match
          </p>
        </div>

        <div className="hero-content__img">
          <img
            className="min-[1300px]:hidden w-[350px] mt-8"
            src={heroTickets}
            alt="Pair of 3D tickets"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
