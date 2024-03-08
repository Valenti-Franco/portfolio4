import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import style from "./index.module.css";

const svgVariants = {
  hidden: {
    x: "-100",
  },
  visible: {
    x: "0",
    transition: { duration: 1.5 },
  },
};

const pathVariants = {
  hidden: {
    fill: "#fff",

    opacity: 1,
    pathLength: 0,
    transition: { duration: 1 },
  },
  visible: {
    fill: "#000",
    opacity: 1,
    pathLength: 1,

    transition: { duration: 1 },
  },
};

const Logo = () => {
  const svgControls = useAnimation();
  const pathControls = useAnimation();

  useEffect(() => {
    const cycleAnimation = async () => {
      while (true) {
        await Promise.all([
          svgControls.start("visible"),
          pathControls.start("visible"),
        ]);

        await new Promise((resolve) => setTimeout(resolve, 3000)); // Add 1 second of delay

        await Promise.all([
          svgControls.start("hidden"),
          pathControls.start("hidden"),
        ]);

        await new Promise((resolve) => setTimeout(resolve, 3000)); // Add 1 second of delay
      }
    };

    cycleAnimation();
  }, [svgControls, pathControls]);

  return (
    <div className={style.Pelota}>
      <motion.svg
        variants={svgVariants}
        animate={svgControls}
        initial="hidden"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 150.000000 150.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.g
          variants={pathVariants}
          animate={pathControls}
          initial="hidden"
          transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          strokeWidth="18.1"
          stroke="#fff"
        >
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M772 1375 c18 -10 31 -29 37 -53 11 -41 81 -431 81 -450 0 -9 -46
            -12 -172 -12 -109 0 -168 -4 -158 -9 12 -8 10 -27 -13 -133 -15 -68 -27 -126
            -27 -130 0 -4 13 1 30 10 25 14 31 28 45 89 l16 73 180 0 c164 0 179 1 179 18
            -1 9 -31 150 -69 312 l-67 295 -45 2 -44 3 27 -15z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M865 1358 c4 -18 36 -157 71 -308 35 -151 64 -278 64 -283 0 -5 12
            -7 28 -5 24 3 41 28 170 263 78 143 146 261 151 263 5 2 12 -6 16 -17 11 -37
            25 -22 25 27 0 26 3 57 6 70 6 23 5 23 -61 20 l-68 -3 -126 -232 c-69 -127
            -129 -229 -132 -225 -3 4 -18 84 -34 177 -51 315 -42 285 -82 285 -34 0 -34
            -1 -28 -32z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M481 668 c1 -191 15 -176 20 22 3 101 1 134 -8 137 -10 4 -13 -32
            -12 -159z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M521 758 c1 -81 2 -80 23 10 14 59 13 62 -5 62 -17 0 -19 -8 -18 -72z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M448 661 c-19 -78 -26 -357 -9 -347 17 11 32 155 29 286 l-3 135 -17
            -74z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M563 590 c-18 -10 -39 -32 -47 -49 -17 -31 -78 -293 -70 -300 2 -2
            19 13 38 35 25 28 37 55 46 99 6 33 15 76 20 95 l9 35 163 -3 c120 -2 159 1
            148 9 -11 8 -12 12 -2 16 37 15 -1 23 -110 24 -94 1 -116 3 -93 10 17 6 71 7
            120 4 50 -3 99 -3 108 1 57 22 -34 44 -179 44 -100 0 -124 -3 -151 -20z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M905 600 c3 -5 12 -10 20 -10 8 0 17 5 20 10 4 6 -5 10 -20 10 -15 0
            -24 -4 -20 -10z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M401 443 c-6 -31 -11 -98 -11 -150 0 -76 3 -93 15 -93 13 0 15 23 15
            150 0 83 -2 150 -4 150 -2 0 -8 -26 -15 -57z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M360 251 c0 -11 -10 -27 -22 -35 l-22 -16 27 0 c24 0 27 4 27 35 0
            19 -2 35 -5 35 -3 0 -5 -9 -5 -19z"
          />
          <motion.path
            variants={pathVariants}
            animate={pathControls}
            d="M481 256 c-9 -11 -9 -16 0 -21 10 -7 28 10 29 28 0 12 -17 8 -29 -7z"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default Logo;
