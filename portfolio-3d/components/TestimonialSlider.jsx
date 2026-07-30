import { FaQuoteLeft } from "react-icons/fa";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiFramer,
  SiNextdotjs,
  SiNpm,
  SiSwiper,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    Icon: FaHtml5,
    name: "HTML5",
    position: "Estrutura",
    message: "Base semântica para organizar as páginas e conteúdos do portfólio.",
  },
  {
    Icon: FaCss3Alt,
    name: "CSS3",
    position: "Estilização",
    message: "Layouts responsivos, cores, transições e identidade visual dos projetos.",
  },
  {
    Icon: FaJs,
    name: "JavaScript",
    position: "Interatividade",
    message: "Recursos dinâmicos, menus, carrosséis e interações das páginas.",
  },
  {
    Icon: FaReact,
    name: "React",
    position: "Interface",
    message: "Componentes reutilizáveis utilizados no portfólio 3D.",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    position: "Framework",
    message: "Estrutura e rotas do novo portfólio interativo.",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    position: "Estilos",
    message: "Estilização ágil e responsiva da interface 3D.",
  },
  {
    Icon: SiFramer,
    name: "Framer Motion",
    position: "Animações",
    message: "Transições e movimentos suaves entre as seções.",
  },
  {
    Icon: SiSwiper,
    name: "Swiper",
    position: "Carrosséis",
    message: "Navegação deslizante usada para exibir projetos e tecnologias.",
  },
  {
    Icon: SiNpm,
    name: "npm",
    position: "Dependências",
    message: "Gerenciamento dos pacotes que dão suporte ao portfólio.",
  },
  {
    Icon: FaGitAlt,
    name: "Git e GitHub",
    position: "Versão",
    message: "Organização, controle de versões e publicação dos projetos.",
  },
  {
    Icon: SiVercel,
    name: "Vercel",
    position: "Hospedagem",
    message: "Publicação do portfólio para acesso online por qualquer pessoa.",
  },
  {
    name: "Resumo das tecnologias",
    position: "Portfólio Rodrigo Balestrim",
    message: "Todas as tecnologias aplicadas neste portfólio em um único lugar.",
    icons: [
      { Icon: FaHtml5, name: "HTML5" },
      { Icon: FaCss3Alt, name: "CSS3" },
      { Icon: FaJs, name: "JavaScript" },
      { Icon: FaReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
      { Icon: SiFramer, name: "Framer Motion" },
      { Icon: SiSwiper, name: "Swiper" },
      { Icon: SiNpm, name: "npm" },
      { Icon: FaGitAlt, name: "Git" },
      { Icon: FaGithub, name: "GitHub" },
      { Icon: SiVercel, name: "Vercel" },
    ],
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                {person.icons ? (
                  <div className="mx-auto mb-3 grid grid-cols-4 gap-3 text-3xl text-white">
                    {person.icons.map(({ Icon, name }) => (
                      <Icon key={name} title={name} aria-label={name} />
                    ))}
                  </div>
                ) : (
                  <div className="mb-2 mx-auto">
                    <person.Icon className="text-6xl text-white" aria-hidden />
                  </div>
                )}

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
