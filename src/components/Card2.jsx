import { useEffect, useState } from "react";
import ContentCard from "./ContentCard.astro";
import style from "./card.module.css";
import { AnimatePresence, color, motion } from "framer-motion";
import ReactIcon from "./Icons/ReactIcon";
import GsapSvg from "./Icons/GsapSvg";
import NetIcon from "./Icons/NetIcon";
import Paypal from "./Icons/Paypal";
import Api from "./Icons/Api";
import C from "./Icons/C";
import PhpIcon from "./Icons/PhpIcon";
import Js from "./Icons/Js";
import Mysql from "./Icons/Mysql";
import Socket from "./Icons/Socket";
import Mongo from "./Icons/Mongo";
import Css from "./Icons/Css";
import Next from "./Icons/Next.jsx";
import Google from "./Icons/Google";
import Three from "./Icons/Three";
import Angular from "./Icons/Angualar";

const Card2 = ({
  children,
  id,
  title,
  isNew,
  type,
  link,
  imageWindow,
  imagePhone,

  subtitle,
  logo,
  teclogies,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    // console.log("hola");
    const windowWidth = window.innerWidth;
    if (windowWidth < 1300) {
      setIsHovered(true);
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={`${style.containerCard} ${
          isNew && " border-purple-900 border-2 "
        }`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence>
          {isNew && isHovered && (
            <motion.div
              className="p-2 bg-cover     border-l-0   flex w-max absolute top-5 left-0 rounded-r-lg   justify-start"
              initial={{ opacity: 0, x: "-200px" }}
              animate={{
                opacity: 1,
                x: "0px",

                borderLeft: "0px",
              }}
              exit={{ opacity: 0, x: "-200px" }}
              transition={{ duration: 0.4 }}
            >
              <p style={{ color: "#dd98fe" }}>NEW</p>
            </motion.div>
          )}
          {isHovered && (
            <motion.div
              className={style.containerShow}
              initial={{ opacity: 0, y: "-200px" }}
              animate={{ opacity: 1, y: "0px" }}
              transition={{ duration: 0.4 }}
            >
              <div className={style.arrow}>
                <motion.svg
                  initial={{ opacity: 0.8, y: "30px" }}
                  animate={{ opacity: 0, y: "-30px" }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                  viewBox="0 -4.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>arrow_up [#340]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -6683.000000)"
                        fill="#fff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                            id="arrow_up-[#340]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </motion.svg>
                <motion.svg
                  initial={{ opacity: 0.8, y: "-10px" }}
                  animate={{ opacity: 0, y: "-70px" }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  viewBox="0 -4.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>arrow_up [#340]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -6683.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                            id="arrow_up-[#340]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </motion.svg>
              </div>
              <motion.p
                initial={{ y: 0 }}
                animate={{ y: -2 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                }}
              >
                Ver Proyecto
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && imagePhone && (
            <>
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo}
                alt=""
              />
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo2}
                alt=""
              />
              <motion.img
                src={imagePhone}
                loading="lazy"
                initial={{ opacity: 0, x: "200px", rotateZ: "100deg" }}
                animate={{ opacity: 1, x: "0px", rotateZ: "0deg" }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, x: "200px", rotateZ: "100deg" }}
                className={style.imgHover}
                alt=""
              />
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && imageWindow && (
            <>
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo}
                alt=""
              />
              <motion.img
                src={logo}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
                className={style.imgfondo2}
                alt=""
              />
              <motion.img
                loading="lazy"
                initial={{ opacity: 0, x: "200px" }}
                animate={{ opacity: 1, x: "100px" }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0, x: "200px" }}
                className={style.imgHoverWindow}
                src={imageWindow}
                alt=""
              />
            </>
          )}{" "}
        </AnimatePresence>

        <children.type {...children.props} />
        {/* <div className={style.containerImg}>
          <img loading="lazy" className={style.img} src={logo} alt="" />
        </div>
        <div className={style.containerText}>
          <h3>{title}</h3>
          <div>
            <p>{type}</p>
            <p>{subtitle}</p>
          </div>
        </div> */}
        <div className={style.cantainerSvg}>
          {teclogies?.map((Technology, index) => (
            <div key={index} className={style.iconContainer}>
              {Technology === "Next" && <Next />}
              {Technology === "React" && <ReactIcon />}
              {Technology === "Gsap" && <GsapSvg />}
              {Technology === "Net" && <NetIcon />}
              {Technology === "Paypal" && <Paypal />}
              {Technology === "Api" && <Api />}
              {Technology === "C" && <C />}
              {Technology === "Php" && <PhpIcon />}
              {Technology === "Js" && <Js />}
              {Technology === "Mysql" && <Mysql />}
              {Technology === "Socket" && <Socket />}
              {Technology === "Mongo" && <Mongo />}
              {Technology === "Css" && <Css />}
              {Technology === "Google" && <Google />}
              {Technology === "Three" && <Three />}
              {Technology === "Angular" && <Angular />}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Card2;
