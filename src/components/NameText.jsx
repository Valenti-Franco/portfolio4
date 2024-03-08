import React, { useRef } from "react";
import style from "./Presentation.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
// import yo from "./../../assets/yo.png";
import { useEffect } from "react";
function MainSectionPresentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const svgVariants = {
    hidden: {
      x: "-100",
    },
    visible: {
      scale: 1,
      x: "0",
      transition: { duration: 1.5 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0.9,
      scale: 1,
      stroke: "#0ee",

      pathLength: 0,
      transition: { duration: 1 },
    },
    visible: {
      opacity: 1,
      scale: 1.1,
      pathLength: 1,
      stroke: "#fff",
      transition: { duration: 1 },
    },
  };

  const svgControls = useAnimation();
  const pathControls = useAnimation();

  useEffect(() => {
    const cycleAnimation = async () => {
      while (true) {
        await Promise.all([
          svgControls.start("visible"),
          pathControls.start("visible"),
        ]);

        await new Promise((resolve) => setTimeout(resolve, 2000)); // Add 1 second of delay

        await Promise.all([
          svgControls.start("hidden"),
          pathControls.start("hidden"),
        ]);

        await new Promise((resolve) => setTimeout(resolve, 2000)); // Add 1 second of delay
      }
    };

    cycleAnimation();
  }, [svgControls, pathControls]);
  return (
    <div className={style.ContainerName}>
      {/* <div
        className={style.container}
        // style={{
        //   background: `linear-gradient(124deg, rgba(0,0,0,1) 2%, rgba(172, 249, 255, 0.63) 11%, rgba(88,218,228,0.3090765449438202) 39%, rgba(17, 41, 43, 0.712) 56%, rgba(0,0,0,0.5955933988764045) 61%, rgba(0,0,0,0) 70%), url(${yo}) right no-repeat`,
        // }}
      > */}
      {/* <div ref={ref} className={style.text}>
          <p>
            <div style={{ display: "flex" }}>
              <motion.strong
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, delay: 0.3 }}
                className={style.fullname}
              >
                <p>Bienvenidos !</p>
                <p>Yo soy</p>{" "} */}
      <div className={style.letter}>
        <motion.svg
          variants={{
            hidden: {
              opacity: 0,
              x: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              x: "0",
              transition: { duration: 1, delay: 0.1 },
            },
          }}
          animate="visible"
          initial="hidden"
          strokeWidth="8.1"
          stroke="#fff"
          className={style.svg}
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.g
            variants={pathVariants}
            animate={pathControls}
            initial="hidden"
            // strokeWidth='8.1'
            // stroke='#fff'
            stroke-linecap="round"
            stroke-linejoin="round"
          ></motion.g>
          <motion.g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M101.15 15.54H34.86c-1.23 0-2.24 1-2.24 2.24v100.97c0 1.24 1.01 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24v-44H94.1c1.24 0 2.24-1 2.24-2.24V55.79c0-1.24-1-2.24-2.24-2.24H58.99v-16.8h42.16c1.24 0 2.24-1 2.24-2.24V17.78c0-1.24-1-2.24-2.24-2.24z"
              fill="#40C0E7"
            ></motion.path>
          </motion.g>
        </motion.svg>

        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="8.1" stroke="#fff"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M110.7 117.03L85.59 83.64c13.01-5.37 22.18-18.08 22.18-32.87c0-19.63-16.13-35.61-35.96-35.61H33.95c-.15 0-.28.06-.42.09h-6.46c-1.24 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24V86.37h8.64l25.2 33.51c.45.59 1.15.94 1.89.94h21.89c.9 0 1.72-.51 2.11-1.31c.4-.8.31-1.76-.23-2.48zM70.12 65.38c-.36.03-.72.06-1.08.06H51.57c-.05 0-.09-.04-.14-.06c-.09-.02-.18-.04-.24-.1a.577.577 0 0 1-.21-.43V36.67c0-.17.08-.32.21-.43c.06-.05.14-.07.22-.09c.06-.02.1-.07.16-.07h17.46c.42 0 .84.03 1.25.07c7.22.66 12.9 6.96 12.9 14.61c.01 7.72-5.76 14.04-13.06 14.62z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0,
              y: "-100",
              rotateZ: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateZ: "0",

              y: "0",
              transition: { duration: 1, delay: 0.1 },
            },
          }}
          animate="visible"
          initial="hidden"
          viewBox="0 0 128 128"
          style={{ width: "10%" }}
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M115.37 117.77L77.78 17.81a2.242 2.242 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 0 2.09-3.03zm-61.14-36.9L64 51.45l9.77 29.43H54.23z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0,
              y: "-100",
              rotateZ: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateZ: "0",

              y: "0",
              transition: { duration: 1, delay: 0.1 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M108.54 15.2H86.65c-1.31 0-2.36 1.06-2.36 2.36v62.91L43.35 16.29a2.35 2.35 0 0 0-1.99-1.09h-21.9c-1.3 0-2.36 1.06-2.36 2.36v100.97c0 1.3 1.06 2.36 2.36 2.36h21.9c1.3 0 2.37-1.06 2.37-2.36V55.61l40.93 64.18c.43.68 1.19 1.09 2 1.09h21.89c1.3 0 2.36-1.06 2.36-2.36V17.56a2.38 2.38 0 0 0-2.37-2.36z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg2}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          viewBox="0 0 128 128"
          style={{ width: "10%" }}
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M111.21 107.69L99.92 85.46c-.16-.32-.46-.55-.81-.63s-.71.01-.99.23c-6.32 5.01-17.18 8.79-25.27 8.79c-15.63 0-26.55-10.58-26.55-25.73s10.92-25.73 26.55-25.73c8.46 0 17.14 2.72 22.64 7.11c.27.22.64.3.98.24c.34-.07.64-.29.81-.6l12.52-22.81c.28-.51.15-1.15-.31-1.51c-9.47-7.5-21.49-11.15-36.75-11.15c-32.5 0-56.08 22.91-56.08 54.46c0 31.56 23.58 54.46 56.08 54.46c14.87 0 27.72-4.52 38.18-13.45c.42-.36.54-.96.29-1.45z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0,
              y: "-100",
              rotateZ: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateZ: "0",

              y: "0",
              transition: { duration: 1, delay: 0.1 },
            },
          }}
          animate="visible"
          initial="hidden"
          viewBox="0 0 128 128"
          style={{ width: "10%" }}
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M64.01 15.06c-34.13 0-55.46 24.1-55.46 53.82c0 29.73 21.33 53.82 55.46 53.82c34.12 0 55.45-24.1 55.45-53.82c-.01-29.73-21.33-53.82-55.45-53.82zm0 81.78c-17.73 0-28.82-12.52-28.82-27.96s11.08-27.96 28.82-27.96c17.73 0 28.81 12.52 28.81 27.96c-.01 15.44-11.09 27.96-28.81 27.96z"
              clip-rule="evenodd"
              fill="#40C0E7"
              fill-rule="evenodd"
            ></motion.path>
          </g>
        </motion.svg>
      </div>
      <div className={style.letter}>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          style={{ width: "10%" }}
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M114.75 17.2a2.375 2.375 0 0 0-1.94-1.01H90.5c-.98 0-1.86.6-2.21 1.51L64 81.01L39.71 17.7a2.365 2.365 0 0 0-2.21-1.51H15.2a2.364 2.364 0 0 0-2.22 3.18l36.95 99.96c.01 0 .01 0 .01.01c.06.18.16.35.27.51c.02.02.04.04.05.06c.04.06.1.11.14.16c.1.11.2.21.32.31c.06.05.12.09.19.13c.13.08.26.14.4.2c.07.02.13.05.19.07c.21.06.43.1.66.1h23.71c.23 0 .45-.04.65-.1c.07-.02.13-.05.2-.07c.14-.06.27-.12.4-.2c.07-.04.13-.08.19-.13c.12-.09.22-.19.32-.31c.05-.05.1-.1.14-.16c.02-.02.04-.03.05-.06c.11-.16.2-.33.27-.51v-.01l36.95-99.96c.25-.73.15-1.54-.29-2.17z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0,
              x: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              x: "0",
              transition: { duration: 1, delay: 0.1 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M115.37 117.77L77.78 17.81a2.242 2.242 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 0 2.09-3.03zm-61.14-36.9L64 51.45l9.77 29.43H54.23z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M102.89 99.51H57.24v-82c0-1.24-1-2.24-2.24-2.24H33.11c-1.24 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24h69.79c1.24 0 2.24-1 2.24-2.24v-16.72a2.251 2.251 0 0 0-2.25-2.24z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M98.89 36.51c1.23 0 2.24-1 2.24-2.24V17.55c0-1.24-1.01-2.24-2.24-2.24H29.1c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h69.8c1.23 0 2.24-1 2.24-2.24V101.8c0-1.24-1.01-2.24-2.24-2.24H53.24V77.51h35.12c1.23 0 2.24-1 2.24-2.24V58.55c0-1.24-1.01-2.24-2.24-2.24H53.24v-19.8h45.65z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M108.54 15.2H86.65c-1.31 0-2.36 1.06-2.36 2.36v62.91L43.35 16.29a2.35 2.35 0 0 0-1.99-1.09h-21.9c-1.3 0-2.36 1.06-2.36 2.36v100.97c0 1.3 1.06 2.36 2.36 2.36h21.9c1.3 0 2.37-1.06 2.37-2.36V55.61l40.93 64.18c.43.68 1.19 1.09 2 1.09h21.89c1.3 0 2.36-1.06 2.36-2.36V17.56a2.38 2.38 0 0 0-2.37-2.36z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg}
          variants={{
            hidden: {
              opacity: 0,
              y: "-100",
              rotateZ: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateZ: "0",

              y: "0",
              transition: { duration: 1, delay: 0.1 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M111.84 15.36H16.16c-1.24 0-2.24 1-2.24 2.24v17.99c0 1.24 1 2.24 2.24 2.24h34.65v80.73c0 1.24 1 2.24 2.24 2.24h21.9c1.24 0 2.24-1 2.24-2.24V37.83h34.65c1.24 0 2.24-1 2.24-2.24V17.6c0-1.24-1-2.24-2.24-2.24z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
        <motion.svg
          className={style.svg3}
          variants={{
            hidden: {
              opacity: 0.5,

              rotateX: "-100",
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotateX: "0",

              transition: { duration: 1, delay: 0.4 },
            },
          }}
          animate="visible"
          initial="hidden"
          style={{ width: "10%" }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <motion.path
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
              strokeWidth="3.1"
              stroke="#fff"
              d="M76.32 16.27H51.68c-1.29 0-2.33 1.05-2.33 2.33v99.96c0 1.29 1.04 2.33 2.33 2.33h24.64c1.29 0 2.33-1.04 2.33-2.33V18.6c0-1.28-1.04-2.33-2.33-2.33z"
              fill="#40C0E7"
            ></motion.path>
          </g>
        </motion.svg>
      </div>
      {/* <p>Full Stack web developer</p>
                <section className={style.icons}>
                  <a
                    href="https://github.com/Valenti-Franco"
                    className={style.svgGit}
                  >
                    <motion.svg
                      whileHover={{
                        // scale: 1.1,
                        fill: "#5100c3",
                        background: "#fff",
                        borderRadius: "50%",
                      }}
                      transition={{ duration: 0.3 }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -100,
                          rotateZ: "-100",
                          fill: "#fff",
                          background: "#222",
                          borderRadius: "50%",
                          padding: "1px",
                          border: "1px solid rgb(255, 255, 255)",
                        },
                        visible: { opacity: 1, x: 0, rotateZ: 0 },
                      }}
                      className={style.git}
                      initial="hidden"
                      animate="visible"
                      fill="fff"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="-143 145 512 512"
                      xml:space="preserve"
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
                          <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"></path>{" "}
                          <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M244.2,423.4 c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2 c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8 c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3 c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6 c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5C243,374.6,247.3,398.2,244.2,423.4z"></path>{" "}
                        </g>{" "}
                      </g>
                    </motion.svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/franco-valenti-57b643246/"
                    className={style.svgGit}
                  >
                    <motion.svg
                      whileHover={{
                        // scale: 1.1,
                        fill: "#5100c3",
                        background: "#fff",
                        borderRadius: "50%",
                      }}
                      transition={{ duration: 0.3 }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -100,
                          rotateZ: "-100",
                          fill: "#fff",
                          background: "#222",
                          borderRadius: "50%",
                          padding: "1px",
                          border: "1px solid rgb(255, 255, 255)",
                        },
                        visible: { opacity: 1, x: 0, rotateZ: 0 },
                      }}
                      className={style.git}
                      initial="hidden"
                      animate="visible"
                      fill="fff"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="-143 145 512 512"
                      xml:space="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                      </g>
                    </motion.svg>
                  </a>
                </section> */}
      {/* </motion.strong> */}
      {/* <div className={style.containerImg}>
								<motion.div
									transition={{ duration: 0.3 }}
									variants={{
										hidden: {
											opacity: 0,
											x: -100,
											// rotateZ: '-100',
											fill: '#fff',
											background: '#222',

											padding: '1px',
											border: '1px solid rgb(255, 255, 255)',
										},
										visible: {
											opacity: 1,
											x: 0,
											rotateZ: 0,
											backgroundImage: "url('src/assets/YO.png')",
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
										},
									}}
									className={style.img}
									initial='hidden'
									animate='visible'
									alt=''
								/>
							</div> */}
      {/* </div> */}
      {/* </p> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default MainSectionPresentation;
