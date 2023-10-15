import handshakeOutline from "../assets/features-icons/handshake-outline.svg";
import seatOutline from "../assets/features-icons/seat-outline.svg";
import shieldOutline from "../assets/features-icons/shield-check-outline.svg";

const Features = () => {
  return (
    <section id="features" className="py-32 px-16">
      <div className="flex flex-col items-center justify-center w-full gap-16">
        <h1 className="text-5xl font-bold">Features</h1>
        <div className="flex max-[1060px]:flex-col flex-wrap max-[1060px]:gap-20 gap-12 items-center justify-center">
          <div className="feature flex flex-col items-center gap-8 min-[1060px]:w-[400px] max-[400px]:px-4 px-12">
            <img
              className="w-[125px] bg-pink rounded-full p-5"
              src={seatOutline}
              alt="Seat"
            />
            <div className="text-center">
              <h1 className="font-bold text-2xl mb-3">Customer Service</h1>
              <p className="text-sm opacity-60">
                Enjoy seamless service from click to seat, ensuring your comfort
                throughout your event experience.
              </p>
            </div>
          </div>
          <div className="feature flex flex-col items-center gap-8 min-[1060px]:w-[400px] max-[400px]:px-4 px-12">
            <img
              className="w-[125px] bg-pink rounded-full p-5"
              src={handshakeOutline}
              alt="Handshake"
            />
            <div className="text-center">
              <h1 className="font-bold text-2xl mb-3">Ticket Guarantee</h1>
              <p className="text-sm opacity-60">
                Authentic tickets, backed by our refund and replacement
                guarantee, for your peace of mind.
              </p>
            </div>
          </div>
          <div className="feature flex flex-col items-center gap-8 min-[1060px]:w-[400px] max-[400px]:px-4 max-[1060px]:px-4 px-12">
            <img
              className="w-[125px] bg-pink rounded-full p-5"
              src={shieldOutline}
              alt="Shield"
            />
            <div className="text-center">
              <h1 className="font-bold text-2xl mb-3">Secure Transactions</h1>
              <p className="text-sm opacity-60">
                Personal and payment information is kept secure and is never
                shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
