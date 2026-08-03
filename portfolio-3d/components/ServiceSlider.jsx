import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RxArrowTopRight, RxChevronLeft, RxChevronRight } from "react-icons/rx";
import {
  SiFramer,
  SiNextdotjs,
  SiNpm,
  SiSwiper,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FreeMode, Navigation, Pagination } from "swiper";
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
  { Icon: SiSwiper, title: "Swiper", description: "Carrosséis responsivos para apresentar tecnologias e projetos." },
  { Icon: SiNpm, title: "npm", description: "Gerenciamento das dependências utilizadas no projeto." },
  { Icon: FaGitAlt, title: "Git", description: "Controle de versões e organização do código." },
  { Icon: FaGithub, title: "GitHub", description: "Publicação e apresentação dos projetos desenvolvidos." },
  { Icon: SiVercel, title: "Vercel", description: "Hospedagem e publicação online do portfólio." },
];

const ServiceSlider = () => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
        }}
        navigation={{ prevEl: ".service-prev", nextEl: ".service-next" }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Pagination]}
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

              <div className="mt-auto text-3xl">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" aria-hidden />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button type="button" aria-label="Conhecimento anterior" className="service-prev absolute left-0 top-[42%] z-20 grid -translate-y-1/2 place-items-center text-4xl text-accent/70 transition hover:scale-110 hover:text-accent sm:-left-3 sm:text-5xl">
        <RxChevronLeft />
      </button>
      <button type="button" aria-label="Próximo conhecimento" className="service-next absolute right-0 top-[42%] z-20 grid -translate-y-1/2 place-items-center text-4xl text-accent/70 transition hover:scale-110 hover:text-accent sm:-right-3 sm:text-5xl">
        <RxChevronRight />
      </button>
    </div>
  );
};

export default ServiceSlider;
