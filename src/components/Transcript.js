import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion, useMotionValue } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import unofficialTranscript from "../assets/SamBennettUnofficialTranscript.txt";

const Transcript = () => {
  const [fileContent, setFileContent] = useState("");
  const [showFullContent, setShowFullContent] = useState(false);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    fetch(unofficialTranscript)
      .then((response) => response.text())
      .then((text) => {
        setFileContent(text);
      });
  }, []);

  const handleContentClick = () => {
    setShowFullContent(true);
  };

  const handleScroll = () => {
    const transcriptDiv = document.getElementById("transcriptDiv"); // Replace with the actual id or class of the div containing the transcript

    if (transcriptDiv.scrollTop <= 0 && !showFullContent) {
      transcriptDiv.style.cursor = "pointer";
    } else {
      transcriptDiv.style.cursor = "auto";
    }
  };

  useEffect(() => {
    handleScroll();
  }, [showFullContent]);

  const contentVariants = {
    initial: { height: "100px" },
    expanded: { height: "auto" },
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My education</p>
        <h2 className={styles.sectionHeadText}>Transcript.</h2>
      </motion.div>
      <motion.div
        className="mx-auto mt-20 bg-tertiary rounded-2xl p-3 flex"
        onClick={handleContentClick}
        id="transcriptDiv"
        variants={fadeIn("down", "spring", 0.5, 0.75)}
      >
        <motion.div
          className={`text-secondary xs:text-[10px] sm:text-[clamp(10px,1.5vw,14px)] whitespace-pre m-auto overflow-hidden`}
          variants={contentVariants}
          initial="initial"
          animate={showFullContent ? "expanded" : "initial"}
        >
          <motion.div
            class="mono"
            style={{ y: scrollY }}
            onScroll={handleScroll}
          >
            {fileContent}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Transcript, "");
