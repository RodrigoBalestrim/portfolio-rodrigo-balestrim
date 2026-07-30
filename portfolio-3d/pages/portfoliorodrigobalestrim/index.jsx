import { motion } from "framer-motion";
import { useState } from "react";
import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider, { projects } from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const toolIcons = { HTML: FaHtml5, CSS: FaCss3Alt, JavaScript: FaJs };

  return (
    <div className="flex min-h-screen w-full items-center bg-primary/30 px-4 py-28 xl:h-full xl:px-0 xl:py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Meus Projetos<span className="text-white">.</span>
            </motion.h2>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              <span className="block">Sites criados para apresentar marcas, produtos e serviços com identidade visual e navegação clara.</span>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-[.16em] text-white/60">Tecnologias aplicadas</span>
              <strong className="mt-2 block text-white">{projects[projectIndex].technologies}</strong>
              <div className="mt-4 flex justify-center gap-4 text-3xl text-white lg:justify-start">
                {projects[projectIndex].tools.map((tool) => {
                  const Icon = toolIcons[tool];
                  return <Icon key={tool} title={tool} aria-label={tool} />;
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider onProjectChange={setProjectIndex} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
