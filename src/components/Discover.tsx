import { useState } from "react";
import taylorSwiftTopPicks from "../assets/discover-events/top-picks/taylor-swift.jpeg";
import oliviaRodrigo from "../assets/discover-events/top-picks/olivia-rodrigo.jpeg";
import noahKahan from "../assets/discover-events/top-picks/noah-kahan.jpeg";
import drake from "../assets/discover-events/top-picks/drake.jpeg";
import nba from "../assets/discover-events/sports/nba.jpg";
import ufc from "../assets/discover-events/sports/ufc.jpeg";
import nfl from "../assets/discover-events/sports/nfl.jpeg";
import mlb from "../assets/discover-events/sports/mlb.jpeg";
import taylorSwiftConcerts from "../assets/discover-events/concerts/taylor-swift.jpeg";
import billyJoel from "../assets/discover-events/concerts/billy-joel.jpeg";
import beyonce from "../assets/discover-events/concerts/beyonce.jpeg";
import sza from "../assets/discover-events/concerts/sza.jpeg";
import daveChappelle from "../assets/discover-events/theatres/dave-chappelle.jpeg";
import hamilton from "../assets/discover-events/theatres/hamilton.jpeg";
import theoVon from "../assets/discover-events/theatres/theo-von.jpeg";
import mattRife from "../assets/discover-events/theatres/matt-rife.jpeg";

const Discover = () => {
  type Genre = "topPicks" | "sports" | "concerts" | "theatres";

  interface EventInfo {
    name: string;
    img: string;
  }

  const DiscoverGenres: Record<Genre, EventInfo[]> = {
    topPicks: [
      { name: "Olivia Rodrigo", img: oliviaRodrigo },
      { name: "Noah Kahan", img: noahKahan },
      { name: "Drake", img: drake },
      { name: "Taylor Swift", img: taylorSwiftTopPicks },
    ],
    sports: [
      { name: "NBA", img: nba },
      { name: "NFL", img: nfl },
      { name: "UFC", img: ufc },
      { name: "MLB", img: mlb },
    ],
    concerts: [
      { name: "Taylor Swift", img: taylorSwiftConcerts },
      { name: "Billy Joel", img: billyJoel },
      { name: "SZA", img: sza },
      { name: "Beyoncé", img: beyonce },
    ],
    theatres: [
      { name: "Dave Chappelle", img: daveChappelle },
      { name: "Hamilton", img: hamilton },
      { name: "Theo Von", img: theoVon },
      { name: "Matt Rife", img: mattRife },
    ],
  };

  const [genre, setGenre] = useState<Genre>("topPicks");

  return (
    <section id="discover" className="flex justify-center pt-10 my-10 h-[75vh]">
      <div className="flex flex-col items-center gap-4 shrink w-5/6">
        <h1 className="max-[1060px]:text-2xl text-3xl self-start font-bold">
          Discover what's next
        </h1>

        <div className="flex self-start gap-6 max-[1060px]:text-sm mb-4 px-1">
          <div>
            <button
              id="topPicks"
              className={genre === "topPicks" ? "opacity-100" : "opacity-50"}
              onClick={() => {
                setGenre("topPicks");
              }}
            >
              Top Picks
            </button>
          </div>
          <div>
            <button
              id="sports"
              className={genre === "sports" ? "opacity-100" : "opacity-50"}
              onClick={() => {
                setGenre("sports");
              }}
            >
              Sports
            </button>
          </div>
          <div>
            <button
              id="concerts"
              className={genre === "concerts" ? "opacity-100" : "opacity-50"}
              onClick={() => {
                setGenre("concerts");
              }}
            >
              Concerts
            </button>
          </div>
          <div>
            <button
              id="theatres"
              className={genre === "theatres" ? "opacity-100" : "opacity-50"}
              onClick={() => {
                setGenre("theatres");
              }}
            >
              Theatre
            </button>
          </div>
        </div>

        <div className="events flex w-full gap-8 flex-nowrap overflow-x-scroll h-[400px] px-2">
          {DiscoverGenres[genre].map((event: EventInfo, index: number) => (
            <div
              key={index}
              className="hover:border-secondary hover:shadow-secondary duration-500 shadow-md w-[270px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                className="object-cover h-[275px]"
                src={event.img}
                alt={event.name}
              />
              <h1 className="p-4">{event.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
