import React, { useState } from "react";
import style from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Api = () => {
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
            API
          </motion.div>
        )}
      </AnimatePresence>
      <svg
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        overflow="visible"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <rect y="0" fill="none" width="24" height="24"></rect>{" "}
            <g transform="translate(1.000000, 8.000000)">
              {" "}
              <path
                fillRule="evenodd"
                fill="#5C85DE"
                d="M2-1.9c-1.1,0-2.3,1.1-2.3,2.2V10H2V5.5h2.2V10h2.2V0.3c0-1.1-1.1-2.2-2.3-2.2H2 L2-1.9z M2,3.2v-3h2.2v3H2L2,3.2z"
              ></path>{" "}
              <path
                fillRule="evenodd"
                fill="#5C85DE"
                d="M10.3-2C9.1-2,8-0.9,8,0.2V10l2.2,0V5.5h2.2c1.1,0,2.3-1.1,2.3-2.2l0-3 c0-1.1-1.1-2.2-2.3-2.2H10.3L10.3-2z M10.2,3.2v-3h2.2v3H10.2L10.2,3.2z"
              ></path>{" "}
              <polygon
                fillRule="evenodd"
                fill="#5C85DE"
                points="18.5,0.3 18.5,7.8 16.2,7.8 16.2,10 23,10 23,7.8 20.8,7.8 20.8,0.3 23,0.3 23,-1.9 16.2,-1.9 16.2,0.3 "
              ></polygon>{" "}
              <polygon
                fillRule="evenodd"
                fill="#3367D6"
                points="2,5.5 2,3.2 3.5,3.2 "
              ></polygon>{" "}
              <polygon
                fillRule="evenodd"
                fill="#3367D6"
                points="10.2,5.5 10.2,3.2 11.5,3.2 "
              ></polygon>{" "}
              <polygon
                fillRule="evenodd"
                fill="#3367D6"
                points="18.5,1.8 18.5,1.8 18.5,0.3 20.8,0.3 "
              ></polygon>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

export default Api;
