import React, { useState } from "react";
import style from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Angualar = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={style.container}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={style.Text}
          >
            Angular
          </motion.div>
        )}
      </AnimatePresence>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z"
            fill="#DD0031"
          ></path>{" "}
          <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"></path>{" "}
          <path
            d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
            fill="white"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default Angualar;