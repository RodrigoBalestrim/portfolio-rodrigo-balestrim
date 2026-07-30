import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  { Icon: FaHtml5, title: "HTML", description: "Estrutura de páginas web semânticas e organizadas." },
  { Icon: FaCss3Alt, title: "CSS", description: "Estilização responsiva e criação de interfaces visuais." },
  { Icon: FaJs, title: "JavaScript", description: "Interações, animações e recursos dinâmicos." },
  { Icon: FaReact, title: "React", description: "Componentes reutilizáveis para interfaces modernas." },
  { Icon: SiNextdotjs, title: "Next.js", description: "Estrutura para aplicações web rápidas e organizadas." },
  { Icon: SiTailwindcss, title: "Tailwind CSS", description: "Estilização ágil com classes utilitárias." },
  { Icon: SiFramer, title: "Framer Motion", description: "Animações fluidas para melhorar a experiência visual." },
  { Icon: FaGitAlt, title: "Git", description: "Controle de versões e organização do código." },
  { Icon: FaGithub, title: "GitHub", description: "Publicação e apresentação dos projetos desenvolvidos." },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="group flex h-full cursor-pointer gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0">
            <div className="mb-4 text-4xl text-accent">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" aria-hidden />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
