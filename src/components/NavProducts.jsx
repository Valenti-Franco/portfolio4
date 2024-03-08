import React, { useState } from "react";
import { proyects } from "../../public/Proyect.json";
import { motion } from "framer-motion";

const NavProducts = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <a
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        href="/#proyects"
        class="flex text-center  text-xl justify-center text-white cs-li-link "
      >
        <div class="flex items-center gap-1">
          <p>Proyectos </p>
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </a>
      {show && (
        <motion.div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          class="  absolute h-auto w-96 grid grid-cols-3 gap-3 p-4 justify-center items-center rounded-md right-0 bg-slate-700 "
        >
          {proyects.map((proyect) => (
            <motion.a
              //aniamcion al tocar
              whileHover={{ scale: 1.05 }}
              //animacion al salir
              whileTap={{ scale: 0.9 }}
              style={{ contain: "content" }}
              href={`/Proyect/${proyect.id}`}
              class="flex h-14 relative justify-center gap-3 p-2 rounded-lg text-center"
            >
              <img
                class="object-contain w-full z-10 h-full"
                src={proyect.logo}
                alt=""
              />
              <img
                class="object-cover scale-150   absolute top-0 opacity-30 blur-md saturate-200  contrast-250 brightness-200 w-full h-full"
                src={proyect.page1.image1}
                alt=""
              />
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default NavProducts;
