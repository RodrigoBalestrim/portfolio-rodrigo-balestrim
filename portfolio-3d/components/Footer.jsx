import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0f0e1d] px-4 py-8 text-white/60 xl:px-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <a href="#inicio" className="text-lg font-bold tracking-[.16em] text-white transition hover:text-accent">
            [RB] <span className="text-xs font-normal">RODRIGO BALESTRIM</span>
          </a>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} — Desenvolvido com dedicação e criatividade.</p>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/RodrigoBalestrim" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:-translate-y-1 hover:text-accent"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rodrigo-balestrim-9a68b3212/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:-translate-y-1 hover:text-accent"><FaLinkedinIn /></a>
          <a href="https://wa.me/5544997075042" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:-translate-y-1 hover:text-[#25d366]"><FaWhatsapp /></a>
          <a href="#inicio" aria-label="Voltar ao topo" className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:-translate-y-1 hover:border-accent hover:bg-accent">
            <HiOutlineArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
