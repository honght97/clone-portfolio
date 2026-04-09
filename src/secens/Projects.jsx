import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const projectVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title, linkProject, imgSrc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-hidden`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      variants={projectVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-[400px] max-h-[400px]"
    >
      <a
        href={linkProject}
        target="_blank"
        rel="noreferrer"
        className={overlayStyles}
      >
        <p className="text-2xl font-playfair">{title}</p>
        {/* <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nisi, quibusdam pariatur placeat aliquid, omnis facilis dolores vel
          repellat, soluta veniam architecto eveniet assumenda dolore labore.
          Totam expedita beatae alias.
        </p> */}
      </a>
      <img
        className="w-full h-auto block max-h-[400px] object-cover object-top"
        src={imgSrc}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-20 md:pt-48 md:pb-48">
      {/* headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, rerum
          recusandae necessitatibus corrupti dolores saepe enim. */}
        </p>
      </motion.div>
      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* row 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px]
          text-2xl font-playfair font-semibold"
          >
            BEAUTIFULL USER INTERFACES
          </div>
          <Project
            title="Panel Home"
            linkProject={"https://panelhome.com.vn/"}
            imgSrc="./assets/panelhome.png"
          />
          <Project
            imgSrc="./assets/tob9home.png"
            title="tob9home"
            linkProject={"https://tob9home.com/"}
          />
          {/* row 2 */}
          <Project
            imgSrc="./assets/WOWCHIPS.png"
            title="WOWCHIPS"
            linkProject={"https://wowchips.vn/"}
          />
          <Project
            imgSrc="./assets/HanoiLink.png"
            title="HanoiLink"
            linkProject={"https://hanoilink.vn/"}
          />
          <Project
            imgSrc="./assets/staycircadian.png"
            title="staycircadian"
            linkProject={"https://staycircadian.com/"}
          />
          {/* row 3 */}
          <Project
            imgSrc="./assets/mrbiuhagiangloop.png"
            title="Mr. Biu Tour Ha Giang"
            linkProject={"https://mrbiuhagiangloop.com/"}
          />
          <Project
            imgSrc="./assets/vietnam-washin.png"
            title="vietnam-washin"
            linkProject={"https://vietnam-washin.vn/showroom"}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px]
          text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
