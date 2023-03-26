import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lupa: string =
  "https://icongr.am/clarity/search.svg?size=128&color=currentColor";
const icons: string[] = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/php-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/java-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/go-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/dot-net-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`]) //distingirlos entre los pares similares, agregandole una letra a la url de las imagenes
  .sort(() => Math.random() - 0.5);
const Memotest = () => {
  const [adivinado, setAdivinado] = useState<string[]>([]);
  const [seleccionado, setSeleccionado] = useState<string[]>([]);
  useEffect(() => {
    if (seleccionado.length === 2) {
      //aca pregunto si la url del primer elementode mi array es el mismo url del segundo osea si son iguales, se le hace split para solo utilizar su url y evadir la A o B
      if (seleccionado[0].split("|")[1] === seleccionado[1].split("|")[1]) {
        setAdivinado((adivinado) => adivinado.concat(seleccionado));
      }
      setTimeout(() => setSeleccionado([]), 1000);
    }
  }, [seleccionado]);
  //verificacion de ganador
  useEffect(() => {
    if (adivinado.length === icons.length) {
      handleClick();
    }
  }, [adivinado]);
  const [showAlert, setShowAlert] = useState(false);
  console.log({ adivinado, icons });

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 8000);
    setTimeout(() => {
      setAdivinado([]);
    }, 2000);
  };
  return (
    <motion.div
      className="flex flex-col justify-center align-middle items-center h-full mt-5 w-fit"
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
      {showAlert ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "#155263",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            marginBottom: "15px",
            borderRadius: "12px",
            width: "20rem",
          }}
        >
          Felicidades , ganaste ! 🏆
        </motion.div>
      ) : (
        <h1 className="text-xl mb-5">
          Encuentra todas las parejas
          <span className="font-bold italic text-[#ececec]"> tech</span> para
          ganar el juego !
        </h1>
      )}
      <ul className="grid grid-cols-4 lg:grid-cols-5 gap-9 h-fit ">
        {icons?.map((image) => {
          //realizo esto para solo tomar el segundo valor, o sea la url exacta, sin el prefijo ya que si lo dejamos no puede obtener la imagen
          const [, url] = image.split("|");
          return (
            <li
              key={image}
              className="lg:w-28 lg:h-fit  md:h-28 sm:26 w-full border-solid border-2 border={#666} rounded-md transition-all duration-500 ease-in-out hover:bg-blue-300"
              onClick={() => {
                if (
                  seleccionado.length < 2 &&
                  !adivinado.includes(image) &&
                  !seleccionado.includes(image)
                ) {
                  setSeleccionado((seleccionado) => seleccionado.concat(image));
                }
              }}
            >
              {/* OTRA CONDICION */}
              {seleccionado.includes(image) || adivinado.includes(image) ? (
                <img
                  src={url}
                  alt="image"
                  className="transition- duration- ease-in-out"
                />
              ) : (
                <img src={lupa} alt="image" />
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Memotest;
