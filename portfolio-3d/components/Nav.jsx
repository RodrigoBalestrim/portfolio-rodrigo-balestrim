// icons
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
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <a
            className="relative flex items-center group hover:text-accent transition-all duration-300"
            href={link.path}
            key={i}
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
            <div>
              <link.Icon aria-hidden />
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
