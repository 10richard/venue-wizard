import mobileApp from "../assets/mobile-app.png";
import googlePlayBadge from "../assets/mobile-app-badges/google-play-badge.png";
import applePlayBadge from "../assets/mobile-app-badges/apple-store-badge.png";

const Download = () => {
  return (
    <section className="flex justify-center pt-16 mb-20">
      <div className="flex justify-around w-11/12 max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:items-center max-[1000px]:gap-16 bg-secondary/80 rounded-3xl px-10 pt-12">
        {/* Left side  */}
        <div className="flex flex-col gap-12 max-[900px]:items-center">
          <div className="w-[490px] max-[900px]:w-[350px] max-[900px]:text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Download our App</h1>
            <p className="opacity-80 max-[900px]:text-sm">
              Easily secure tickets on the go, get timely event reminders, and
              unlock special in-app perks by downloading our mobile app today
            </p>
          </div>
          <div className="mobile-app-badges flex max-[900px]:flex-col max-[900px]:gap-2 gap-6">
            <img
              className="w-[225px] max-[900px]:w-[200px] cursor-pointer"
              src={googlePlayBadge}
              alt="Google play store badge"
            />
            <img
              className="w-[225px] max-[900px]:w-[200px] cursor-pointer"
              src={applePlayBadge}
              alt="Apple store badge"
            />
          </div>
        </div>

        {/* Right side */}
        <img
          className="max-[900px]:w-[300px] w-[350px]"
          src={mobileApp}
          alt="Venue Wizard Mobile App"
        />
      </div>

      {/* <div className="flex justify-center items-center w-5/6">
        <h1 className="text-3xl font-bold w-[600px]">
          Your Favorite Events, Just a Tap Away
        </h1>
        <div>
          <img
            className="w-[450px]"
            src={mobileApp}
            alt="Venue Wizard Application for Mobile Devices"
          />
        </div>
      </div> */}
    </section>
  );
  //Similar to stubhub
};

export default Download;
