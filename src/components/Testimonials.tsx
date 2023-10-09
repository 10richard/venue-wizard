import { useEffect, useState, useRef } from "react";
import closedQuote from "../assets/testimonials/quote-close.svg";

const Testimonials = () => {
  const Testimonials: Record<string, string>[] = [
    {
      customer_name: "Harper M.",
      review:
        "I was skeptical about buying tickets online, but Venue Wizard's authenticity guarantee put my mind at ease. The tickets were legit, and I had a blast at the event.",
    },
    {
      customer_name: "Isabella E.",
      review:
        "Their customer support team is fantastic! They helped me resolve an issue in no time, and I couldn't be happier with the service.",
    },
    {
      customer_name: "Ryan P.",
      review:
        "Venue Wizard made our anniversary special with tickets to a romantic concert. It's our go-to for creating memorable moments.",
    },
    {
      customer_name: "Ethan L.",
      review:
        "I've used many ticket platforms, but Venue Wizard stands out for its reliability and convenience. Two thumbs up!",
    },
    {
      customer_name: "John S.",
      review:
        "Venue Wizard saved the day when I thought I'd missed out on a sold-out show. Thanks for making it possible!",
    },
  ];
  const delay: number = 4000;

  const [index, setIndex] = useState<number>(0);
  const timeoutRef: any = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section id="testiomonials">
      <div className="w-full py-20 bg-primary flex max-[1060px]:flex-col max-[1060px]:gap-14 items-center justify-around text-center">
        <h1 className="max-[1060px]:text-3xl text-4xl font-bold text-white">
          Customer Testimonials
        </h1>

        <div className="slideshow overflow-hidden max-w-[500px] my-0">
          <div className="slideshowDots">
            {Testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot bg-white p-1.5 rounded-full cursor-pointer w-[15px] h-[15px] inline-block mb-[15px] mx-[10px]  ${
                  index === idx ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setIndex(idx)}
              ></div>
            ))}
          </div>
          <div
            className="slideshowSlider whitespace-nowrap transition-transform duration-1000 max-[725px]:w-[350px]"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {Testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="slide w-full bg-white border-l-4 border-pink h-[225px] rounded-xl inline-block whitespace-normal align-bottom"
              >
                <div className="flex flex-col items-center justify-center px-10 h-full gap-6">
                  <p className="max-[725px]:text-sm">"{testimonial.review}"</p>
                  <div className="flex justify-between items-center w-4/6">
                    <h1>{testimonial.customer_name}</h1>
                    <img
                      className="w-16"
                      src={closedQuote}
                      alt="closed quote icon"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="carousel-container flex flex-col items-center gap-7 overflow-hidden">
          <div className="carousel-dots flex gap-10">
            {Testimonials.map((_, idx) => (
              <div
                className={`carousel-dot bg-white p-1.5 rounded-full cursor-pointer ${
                  index === idx ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setIndex(idx)}
              ></div>
            ))}
          </div>

          <div
            className="carousel-slides whitespace-nowrap"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {Testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="carousel-slide max-[725px]:w-[350px] w-[550px] h-[225px] gap-5 bg-white max-[725px]:px-10 px-20 py-8 rounded-lg border-l-4 border-pink inline-block"
              >
                <p className="max-[725px]:text-sm">"{testimonial.review}"</p>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl">{testimonial.customer_name}</h2>
                  <img
                    className="w-16"
                    src={closedQuote}
                    alt="closed quote icon"
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
