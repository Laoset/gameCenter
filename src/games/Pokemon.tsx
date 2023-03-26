import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};
const Pokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  const [inputValue, setInputValue] = useState<string>("");
  const [showImage, setShowImage] = useState<Boolean>(false);

  useEffect(() => {
    const getpokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const data = await response.json();
      const pokemon = await data.results.map(async (result) => {
        const res = await fetch(result.url);
        const data = await res.json();
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        };
      });
      const pokemons = await Promise.all(pokemon);
      setPokemons(pokemons);
    };
    getpokemones();
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //si no hay pokemon:
    if (!currentPokemon) return;
    if (inputValue === currentPokemon.name) {
      setShowImage(true);
    } else {
      alert("incorrecto");
    }
  };
  console.log(currentPokemon);
  useEffect(() => {
    if (pokemons.length) {
      setCurrentPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
    }
  }, [pokemons]);
  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const randomPokemon = pokemons[randomIndex];
    setCurrentPokemon(randomPokemon);
    setShowImage(false);
    setInputValue("");
  };
  if (!currentPokemon) return <div>Cargando...</div>;
  return (
    <motion.div
      className="flex flex-col justify-center align-middle h-full mt-5 w-fit "
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
      <h1 className="text-xl mb-4">
        Escribe el nombre del Pokemon y presiona
        <span className="font-bold italic text-[#ececec]"> Enter</span> para
        verificar, si es correcto se mostrara ante ti !
      </h1>
      <div className="w-full h-96 flex justify-center">
        {!showImage ? (
          <img
            src={currentPokemon.image}
            alt="pokemonsito"
            className="blur-md h-96 w-full"
          />
        ) : (
          <img
            src={currentPokemon.image}
            alt="pokemonsito"
            className="h-96 w-fit"
          />
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={inputValue}
          type="text"
          onChange={handleInputChange}
          className="p-3 rounded-md self-center w-2/4"
        />
      </form>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onClick={getRandomPokemon}
        className="bg-[#155263] p-3 rounded-lg w-fit self-center text-lg text-white font-semibold  mt-4"
      >
        Prueba otro
      </motion.button>
    </motion.div>
  );
};

export default Pokemon;
