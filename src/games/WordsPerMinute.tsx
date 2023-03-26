import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
const WordsPerMinute = () => {
  //palabras random
  const [words, setWords] = useState(faker.random.words(1));
  const [characterCount, setCharacterCount] = useState(0);
  const [data, setData] = useState("");
  const [time, setTime] = useState(0);
  const startGame = () => {
    if (characterCount >= 1) {
      setCharacterCount(0);
    }
    setTime(15);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data === words) {
      const newWords = faker.random.words(1);
      setWords(newWords);
      const datitaPalabra = data.split(" ").length;
      setCharacterCount(characterCount + datitaPalabra);
    }
    setData("");
  };
  useEffect(() => {
    if (time !== 0) {
      const timeOut = setTimeout(() => setTime(time - 1), 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
    if (time === 0) {
      setData("");
    }
  }, [time]);

  return (
    <motion.div
      className="flex flex-col justify-center align-middle  mt-5 w-fit h-full"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <h1 className="text-xl">
        Escribe lo que se encuentra debajo y presiona
        <span className="font-bold italic text-[#ececec]"> Enter</span> para
        cambiar la palabra !
      </h1>
      <div className="p-10 flex flex-col justify-center align-middle text-center items-center gap-4">
        <h1 className="text-xl font-bold bg-[#ff9a3c] text-black rounded-md w-2/4 h-full p-2">
          {words}
        </h1>
        <div className="flex flex-row gap-8 ">
          <h1 className="text-lg">
            Tiempo <span className="text-lg font-bold italic">restante : </span>
            {time}
          </h1>
          <h1 className="text-lg ">
            Palabras
            <span className="text-lg font-bold italic"> tipeadas : </span>
            {characterCount}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        {time !== 0 ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="p-3 rounded-md"
            ></input>
            <button type="submit"></button>
          </form>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-[#155263] p-3 rounded-lg w-fit self-center text-lg text-white font-semibold  mt-4"
            onClick={startGame}
          >
            JUGAR
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default WordsPerMinute;
