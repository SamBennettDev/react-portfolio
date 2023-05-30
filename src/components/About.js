import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full cursor-pointer">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-19 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software engineer with a passion for learning and
        utilizing my expertise to create innovative solutions. With a solid
        foundation in programming languages such as Java, C++, and Python, I
        thrive in designing and developing robust software applications. My
        dedication to staying updated with the latest industry trends and
        technologies enables me to deliver high-quality results that exceed
        client expectations. Whether it's collaborating with a team or working
        independently, I am committed to delivering efficient, scalable, and
        user-centric solutions. Let's embark on a journey together to turn ideas
        into reality.
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
