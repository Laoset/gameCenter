import React, { useState } from "react";
import Memotest from "./Memotest";
import Pokemon from "./Pokemon";
import WordsPerMinute from "./WordsPerMinute";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const GameCenter = () => {
  const [selectedGame, setSelectedGame] = useState("wpm");
  console.log(selectedGame);
  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };
  return (
    <main className="flex justify-center text-center flex-col gap-8 p-5 w-full">
      <div className="flex justify-center text-center flex-col ">
        <div className="flex flex-row justify-between gap-8 align-middle text-center items-center">
          <h1 className="hover:animate-pulse text-demas text-5xl font-marca  text-left">
            #AKCS
          </h1>
          <div className="flex flex-row gap-8">
            <a
              href="https://github.com/Laoset"
              className="text-white cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="1.5rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
              className="text-white  cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="1.5rem" />
            </a>
          </div>
        </div>
        <h1 className="text-[90px] font-bold bg-nuevoBg text-transparent bg-clip-text">
          GAME CENTER
        </h1>
      </div>
      <div className="flex justify-center text-center flex-col gap-10">
        <ul className="flex justify-between lg:justify-evenly text-center flex-row">
          <li
            className={`text-2xl ${
              selectedGame === "memotest"
                ? "text-nav text-[22px]  font-fireCode font-semibold lg:text-3xl cursor-pointer hover:scale-110 duration-200 italic mx-2 lg:mx-0"
                : "text-white font-fireCode hover:text-nav text-[22px] font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic mx-2 lg:mx-0"
            }`}
            onClick={() => handleGameSelect("memotest")}
          >
            Memotest
          </li>
          <li
            className={`text-2xl ${
              selectedGame === "wpm"
                ? "text-nav  text-[22px] font-fireCode font-semibold md:text-3xl cursor-pointer hover:scale-110 duration-200 italic mx-2 lg:mx-0"
                : "text-white font-fireCode text-[22px]  font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic hover:text-nav mx-2 lg:mx-0"
            }`}
            onClick={() => handleGameSelect("wpm")}
          >
            Words Per Minute
          </li>
          <li
            className={`text-2xl ${
              selectedGame === "pokemon"
                ? "text-nav font-fireCode text-[22px] font-semibold md:text-3xl cursor-pointer hover:scale-110 duration-200 italic mx-2 lg:mx-0"
                : "text-white font-fireCode text-[22px] font-semibold md:text-2xl cursor-pointer hover:scale-110 duration-200 italic hover:text-nav mx-2 lg:mx-0"
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
