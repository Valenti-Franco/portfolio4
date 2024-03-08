import React, { useState } from "react";
import style from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Three = () => {
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
            ThreeJS
          </motion.div>
        )}
      </AnimatePresence>
      <svg
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="27 26 173.23 174.94"
      >
        <g
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        >
          <path d="M70.213 200.94L27 26l173.23 49.874z" />
          <path d="M113.583 50.942l21.591 87.496-86.567-24.945z" />
          <path d="M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zM156.663 63.26l10.724 43.465-43.008-12.346zM92.108 125.39l10.724 43.465-43.008-12.346z" />
        </g>
      </svg>
    </div>
  );
};

export default Three;
