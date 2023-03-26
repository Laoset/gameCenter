import React, { useState } from "react";
import { Link } from "react-router-dom";
import Memotest from "./Memotest";
import Pokemon from "./Pokemon";
import WordsPerMinute from "./WordsPerMinute";

const GameCenter = () => {
  const [selectedGame, setSelectedGame] = useState("");
  console.log(selectedGame);
  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };
  return (
    <main className="flex justify-center text-center flex-col gap-10 p-5 w-full">
      <div className="flex justify-center text-center flex-col">
        <h1 className="text-8xl font-bold bg-nuevoBg text-transparent bg-clip-text">
          GAME CENTER
        </h1>
      </div>
      <div className="flex justify-center text-center flex-col gap-10">
        <ul className="flex justify-evenly text-center flex-row">
          <li
            className={`text-2xl ${
              selectedGame === "memotest"
                ? "text-nav text-xl font-fireCode font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic"
                : "text-white font-fireCode hover:text-nav text-[22px] font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic"
            }`}
            onClick={() => handleGameSelect("memotest")}
          >
            Memotest
          </li>
          <li
            className={`text-2xl ${
              selectedGame === "wpm"
                ? "text-nav  text-[22px] font-fireCode font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic"
                : "text-white font-fireCode text-[22px]  font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic hover:text-nav "
            }`}
            onClick={() => handleGameSelect("wpm")}
          >
            Words Per Minute
          </li>
          <li
            className={`text-2xl ${
              selectedGame === "pokemon"
                ? "text-nav font-fireCode text-[22px] font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic"
                : "text-white font-fireCode text-[22px] font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic hover:text-nav "
            }`}
            onClick={() => handleGameSelect("pokemon")}
          >
            Pokemon
          </li>
        </ul>
      </div>
      <div className="flex justify-center w-full">
        {selectedGame === "memotest" ? (
          <Memotest />
        ) : selectedGame === "wpm" ? (
          <WordsPerMinute />
        ) : selectedGame === "pokemon" ? (
          <Pokemon />
        ) : null}
      </div>
    </main>
  );
};

export default GameCenter;
