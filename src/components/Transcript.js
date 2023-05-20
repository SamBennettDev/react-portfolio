import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import unofficialTranscript from "../assets/SamBennettUnofficialTranscript.txt";

const Transcript = () => {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    fetch(unofficialTranscript)
      .then((response) => response.text())
      .then((text) => {
        setFileContent(text);
      });
  }, []);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My education</p>
        <h2 className={styles.sectionHeadText}>Transcript.</h2>
      </motion.div>
      <div className="mt-20 bg-tertiary rounded-2xl p-5">
        <div className={`text-secondary text-[14px] whitespace-pre m-auto`}>
          {fileContent}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Transcript, "");
