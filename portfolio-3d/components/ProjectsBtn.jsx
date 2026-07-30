import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/portfoliorodrigobalestrim"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <svg viewBox="0 0 160 160" className="animate-spin-slow h-full w-full max-h-[148px] max-w-[141px] pointer-events-none select-none" aria-hidden="true">
          <defs><path id="project-circle" d="M80,80 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" /></defs>
          <text fill="currentColor" fontSize="14" fontWeight="700" letterSpacing="2"><textPath href="#project-circle">MEUS PROJETOS • MEUS PROJETOS •</textPath></text>
        </svg>
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
