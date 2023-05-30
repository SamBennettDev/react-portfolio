import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Python",
        "Java",
        "C#",
        "C++",
        "C",
        "SQL",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 200,
      loop: true,
      cursorChar: "",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Technologies</p>
      <h1 className={styles.sectionHeadText}>
        I have coded in <span ref={el} className="text-[#3591ef]"></span>
      </h1>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
