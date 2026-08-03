import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import About from "./about";
import Contact from "./contact";
import Projects from "./projetos";
import Services from "./services";
import Testimonials from "./testimonials";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-primary/60 pb-24 pt-32 xl:pb-0 xl:pt-0">
      {/* text */}
      <div className="min-h-[calc(100svh-8rem)] w-full bg-gradient-to-r from-primary/70 via-primary/45 to-transparent xl:h-full xl:min-h-0">
        <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] flex-col justify-center text-left xl:h-full xl:min-h-0 xl:pt-40">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Criando experiências <br />
            <span className="text-accent">digitais</span> com <br /> propósito.
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-10 max-w-md text-sm font-light leading-7 text-white/70 sm:text-base xl:mb-16 xl:max-w-xl"
          >
            Desenvolvedor web com experiência na criação de projetos responsivos
            e interativos usando React, Next.js e JavaScript. Desenvolvo soluções
            digitais funcionais, com atenção à experiência do usuário.
          </motion.p>

          {/* btn */}
          <div className="relative flex justify-center xl:hidden">
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
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#1a1730] via-[#1a1730]/90 to-transparent"
        aria-hidden="true"
      />
    </section>
    <section id="sobre" className="relative isolate overflow-hidden bg-[#1a1730]">
      <About />
    </section>
    <section id="servicos" className="relative isolate overflow-hidden">
      <Services />
    </section>
    <section id="projetos" className="relative isolate overflow-hidden">
      <Projects />
    </section>
    <section id="tecnologias" className="relative isolate min-h-screen overflow-hidden">
      <Testimonials />
    </section>
    <section id="contato" className="relative isolate min-h-screen overflow-hidden">
      <Contact />
    </section>
    </>
  );
};

export default Home;
