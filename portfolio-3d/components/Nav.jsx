// icons
import { useEffect, useState } from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Início", path: "/#inicio", Icon: HiHome },
  { name: "Sobre", path: "/#sobre", Icon: HiUser },
  { name: "Serviços", path: "/#servicos", Icon: HiRectangleGroup },
  { name: "Projetos", path: "/#projetos", Icon: HiViewColumns },
  {
    name: "Tecnologias aplicadas",
    path: "/#tecnologias",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "Contato",
    path: "/#contato",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sectionIds = navData.map((link) => link.path.split("#")[1]);

    const updateActiveSection = () => {
      const referenceLine = window.innerHeight * 0.45;
      let currentSection = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= referenceLine) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => {
          const sectionId = link.path.split("#")[1];
          const isActive = activeSection === sectionId;

          return (
          <a
            className={`relative flex items-center group transition-all duration-300 hover:text-accent ${isActive ? "scale-125 text-accent" : "text-white"}`}
            href={link.path}
            key={i}
            aria-current={isActive ? "location" : undefined}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div className="relative">
              <link.Icon aria-hidden />
              <span className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity xl:-left-3 xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0 ${isActive ? "opacity-100" : "opacity-0"}`} aria-hidden />
            </div>
          </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
