import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="min-h-[100svh] bg-primary/60 pb-24 pt-32 xl:h-full xl:min-h-0 xl:pb-0 xl:pt-0">
      {/* text */}
      <div className="min-h-[calc(100svh-8rem)] w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 xl:h-full xl:min-h-0">
        <div className="container mx-auto flex min-h-[calc(100svh-8rem)] flex-col justify-start text-center xl:h-full xl:min-h-0 xl:justify-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Construindo ideias <br /> em{" "}
            <span className="text-accent">soluções Digitais.</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Desenvolvedor Web Júnior com foco em HTML, CSS e JavaScript.
            Transformo ideias em experiências digitais funcionais e bem pensadas.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[1280px]">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[650px] max-h-[610px] absolute -bottom-24 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
