import { useState } from "react";
import taylorSwift from "../assets/discover-events/taylor-swift.jpeg";
import oliviaRodrigo from "../assets/discover-events/olivia-rodrigo.jpeg";
import noahKahan from "../assets/discover-events/noah-kahan.jpeg";
import drake from "../assets/discover-events/drake.jpeg";

const Discover = () => {
  //add variable for names and maybe image imports?

  const [wordHighlighted, setWordHighlighted] = useState(false);

  const DiscoverEvents = {
    topPicks: [
      { pick: "Olivia Rodrigo", img: oliviaRodrigo },
      { pick: "Noah Kahan", img: noahKahan },
      { pick: "Drake", img: drake },
      { pick: "Taylor Swift", img: taylorSwift },
    ],
    sports: [
      { sport: "MLB", img: "img" },
      { sport: "NFL", img: "img" },
      { sport: "NBA", img: "img" },
      { sport: "NHL", img: "img" },
    ],
    concerts: [
      { concert: "Taylor Swift", img: taylorSwift },
      { concert: "Billy Joel", img: "img" },
      { concert: "Beyoncé", img: "img" },
      { concert: "Lana Del Rey", img: "img" },
    ],
    theatres: [
      { theatre: "Dave Chappelle", img: "img" },
      { theatre: "Hamilton", img: "img" },
      { theatre: "Pete Davidson", img: "img" },
      { theatre: "Tina Fey", img: "img" },
    ],
  };

  return (
    <section id="discover" className="flex justify-center mt-10 h-[60vh]">
      <div className="flex flex-col items-center gap-4 shrink w-5/6">
        <h1 className="max-[1060px]:text-2xl text-3xl self-start font-bold">
          Discover what's next
        </h1>

        <div className="flex self-start gap-6 max-[1060px]:text-sm mb-4">
          <div>
            <button className="opacity-100">Top Picks</button>
            {/* Olivia Rodrigo, Noah Kahan, Drake, Taylor Swift */}
          </div>
          <div>
            <button className="opacity-50 focus:opacity-100">Sports</button>
            {/* MLB, NFL, NBA, NHL */}
          </div>
          <div>
            <button className="opacity-50 focus:opacity-100">Concerts</button>
            {/* Taylor Swift, Billy Joel, Beyoncé, Lana Del Rey */}
          </div>
          <div>
            <button className="opacity-50 focus:opacity-100">Theatre</button>
            {/* Dave Chappelle, Hamilton, Pete Davidson, Tina Fey */}
          </div>
        </div>

        <div className="flex w-full h-[90%] gap-8 flex-nowrap">
          <div className="border-primary border-2 hover:border-secondary hover:shadow-secondary duration-500 shadow-sm w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer">
            <img
              className="object-cover h-[275px]"
              src={oliviaRodrigo}
              alt="Olivia Rodrigo"
            />
            <h1 className="p-4">Olivia Rodrigo</h1>
          </div>
          <div className="border-primary border-2 hover:border-secondary hover:shadow-secondary duration-500 shadow-sm w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer">
            <img
              className="object-cover h-[275px]"
              src={noahKahan}
              alt="Noah Kahan"
            />
            <h1 className="p-4">Noah Kahan</h1>
          </div>
          <div className="border-primary border-2 hover:border-secondary hover:shadow-secondary duration-500 shadow-sm w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer">
            <img className="object-cover h-[275px]" src={drake} alt="Drake" />
            <h1 className="p-4">Drake</h1>
          </div>
          <div className="border-primary border-2 hover:border-secondary hover:shadow-secondary duration-500 shadow-sm w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer">
            <img
              className="object-cover h-[275px]"
              src={taylorSwift}
              alt="Taylor Swift"
            />
            <h1 className="p-4">Taylor Swift</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
