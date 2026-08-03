import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const projects = [
  { title: "Prazo Certo", category: "Aplicativo mobile e web", technologies: "React Native, Expo, TypeScript e Supabase", tools: ["React", "Expo", "TypeScript", "Supabase"], url: "https://prazo-certo.expo.app" },
  { title: "Currículo HTML", category: "Currículo responsivo", technologies: "HTML, CSS e JavaScript", tools: ["HTML", "CSS", "JavaScript"], url: "https://rodrigobalestrim.github.io/curriculo-html-rodrigo/" },
  { title: "Mister Color", category: "Loja de tintas", technologies: "HTML, CSS e JavaScript", tools: ["HTML", "CSS", "JavaScript"], url: "/projects/mister-color/index.html" },
  { title: "M3 Engenharia", category: "Site institucional", technologies: "HTML, CSS, JavaScript e design responsivo", tools: ["HTML", "CSS", "JavaScript"], url: "/projects/m3-engenharia/index.html" },
  { title: "Terra Viva", category: "Produtos naturais", technologies: "HTML, CSS, JavaScript e interface responsiva", tools: ["HTML", "CSS", "JavaScript"], url: "/projects/produtos-naturais/index.html" },
];

const WorkSlider = ({ onProjectChange }) => {
  const [nextProjectUrl, setNextProjectUrl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = (event, url) => {
    event.preventDefault();
    setNextProjectUrl(url);
  };

  return (
  <>
    {nextProjectUrl && (
      <>
        <motion.div
          className="fixed inset-0 z-[100] bg-[#4b3792]"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed inset-0 z-[101] bg-[#3b2d71]"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.1, duration: 0.45, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed inset-0 z-[102] bg-[#2e2257]"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.2, duration: 0.45, ease: "easeInOut" }}
          onAnimationComplete={() => window.location.assign(nextProjectUrl)}
        />
      </>
    )}
  <div className="relative">
    <Swiper
      spaceBetween={20}
      navigation={{ nextEl: ".project-next", prevEl: ".project-prev" }}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
        onProjectChange?.(swiper.activeIndex);
      }}
      modules={[Navigation, Pagination]}
      className="h-[370px] sm:h-[500px]"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={project.title}>
          <article className="group h-full overflow-visible [perspective:1200px]">
            <div className="relative h-[calc(100%_-_64px)] min-h-[290px] overflow-hidden rounded-xl border border-white/15 bg-black/20 shadow-[0_18px_35px_rgba(0,0,0,0.45)] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(2deg)_rotateY(-3deg)_translateY(-8px)]">
              <iframe src={index === activeIndex ? project.url : undefined} title={`Prévia do site ${project.title}`} className="pointer-events-none absolute left-0 top-0 h-[220%] w-[200%] origin-top-left scale-50 border-0 bg-white" loading="lazy" />
              <a href={project.url} onClick={(event) => openProject(event, project.url)} aria-label={`Abrir o site ${project.title}`} className="absolute inset-0 z-10" />
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="absolute bottom-3 right-5 z-10 flex gap-2">
      <button type="button" aria-label="Projeto anterior" className="project-prev grid h-9 w-9 place-items-center rounded-full border border-white/30 transition hover:border-accent hover:bg-accent"><BsArrowLeft /></button>
      <button type="button" aria-label="Próximo projeto" className="project-next grid h-9 w-9 place-items-center rounded-full border border-white/30 transition hover:border-accent hover:bg-accent"><BsArrowRight /></button>
    </div>
  </div>
  </>
  );
};

export default WorkSlider;
