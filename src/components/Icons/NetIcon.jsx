import React, { useState } from "react";
import style from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Next = () => {
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
            .NET
          </motion.div>
        )}
      </AnimatePresence>
      <svg
        fill="#00e1ff"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#00e1ff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>dotnet</title>{" "}
          <path d="M3.175 20.551c-0.001 0.289-0.123 0.549-0.318 0.733l-0.001 0c-0.2 0.188-0.47 0.303-0.767 0.303s-0.568-0.116-0.769-0.304l0.001 0.001c-0.195-0.184-0.317-0.444-0.317-0.732s0.122-0.549 0.318-0.732l0.001-0c0.2-0.188 0.47-0.303 0.767-0.303s0.567 0.115 0.768 0.304l-0.001-0.001c0.195 0.184 0.317 0.444 0.318 0.733v0zM14.051 21.417h-1.947l-5.126-8.088c-0.118-0.182-0.227-0.392-0.314-0.613l-0.009-0.024h-0.045c0.041 0.365 0.064 0.787 0.064 1.215 0 0.104-0.001 0.208-0.004 0.312l0-0.015v7.213h-1.721v-11.003h2.073l4.955 7.898c0.209 0.326 0.344 0.552 0.404 0.675h0.030c-0.050-0.374-0.078-0.806-0.078-1.245 0-0.083 0.001-0.165 0.003-0.248l-0 0.012v-7.093h1.715zM22.433 21.417h-6.025v-11.003h5.786v1.55h-4.005v3.117h3.69v1.542h-3.69v3.254h4.244zM30.996 11.964h-3.084v9.454h-1.781v-9.454h-3.077v-1.55h7.941z"></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default Next;
