import { styles } from "../styles";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `<h1 class="${styles.heroHeadText} text-white"}>Hi, I'm <span class='text-[#3591ef]'>Sam</span></h1></br><span class="${styles.heroSubText} text-white-100">Computer Science student at the University of Utah<br>Expected Graduation - Spring 2024</span>`,
      ],
      typeSpeed: 10,
      backSpeed: 100,
      startDelay: 300,
      backDelay: 1000,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3591ef]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div ref={el}></div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
