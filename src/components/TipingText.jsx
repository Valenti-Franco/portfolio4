import React from "react";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const TipingText = () => {
  const [typingText, setTypingText] = useState("");
  const [isTickVisible, setIsTickVisible] = useState(false);

  const textSequence = [
    "D",
    "DE",
    "DES",
    "DESA",
    "DESAR",
    "DESARR",
    "DESARRO",
    "DESARROL",
    "DESARROLL",
    "DESARROLLA",
    "DESARROLLAD",
    "DESARROLLADO",
    "DESARROLLADOR",
    "DESARROLLADOR ",
    "DESARROLLADOR F",
    "DESARROLLADOR FU",
    "DESARROLLADOR FUL",
    "DESARROLLADOR FULL",
    "DESARROLLADOR FULL ",
    "DESARROLLADOR FULL S",
    "DESARROLLADOR FULL ST",
    "DESARROLLADOR FULL STA",
    "DESARROLLADOR FULL STAC",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL STACK",
    "DESARROLLADOR FULL ",
    "DESARROLLADOR  ",
    "DESARROLLAD  ",
    "DESARROLL ",
    "DESARROL ",
    "DESARRO ",
    "DESARR ",
    "DESARR",
    "DESA",
    "DES",
    "D",
    "",
    "",
    "TÉ",
    "TÉC",
    "TÉCNI ",
    "TÉCNIC",
    "TÉCNICO ",
    "TÉCNICO E",
    "TÉCNICO EN ",
    "TÉCNICO EN P",
    "TÉCNICO EN PR",
    "TÉCNICO EN PRO",
    "TÉCNICO EN PROG",
    "TÉCNICO EN PROGR",
    "TÉCNICO EN PROGRA",
    "TÉCNICO EN PROGRAM",
    "TÉCNICO EN PROGRAMA",
    "TÉCNICO EN PROGRAMAC",
    "TÉCNICO EN PROGRAMACI",
    "TÉCNICO EN PROGRAMACIÓN",
    "TÉCNICO EN PROGRAMACIÓN",
    "TÉCNICO EN PROGRAMACIÓN",
    "TÉCNICO EN",
    "TÉCNIC",
    "TÉCNI",
    "TÉCN",
    "TÉC",
    "TÉ",
    "T",
    "",
    "",
  ];
  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setTypingText(textSequence[index]);

      if (index === textSequence.length - 1) {
        setTimeout(() => {
          setTypingText("");
          setIsTickVisible(false);
          index = 0;
        }, 3000); // 5000 milisegundos = 5 segundos
      }

      // Cambia la visibilidad del Tick dentro del intervalo
      setIsTickVisible((prev) => !prev);

      index += 1;
    }, 200); // Ajusta según sea necesario, un intervalo más largo para que el efecto sea más notorio

    return () => clearInterval(intervalId);
  }, []);

  const Tick = ({ isVisible }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="99"
        viewBox="0 0 5 99"
        fill="none"
      >
        <rect
          width="5"
          height="99"
          fill={isVisible ? "#D9D9D9" : "#d9d9d900"}
        />
      </svg>
    );
  };
  return (
    <>
      {typingText} <Tick isVisible={isTickVisible} />
    </>
  );
};

export default TipingText;
