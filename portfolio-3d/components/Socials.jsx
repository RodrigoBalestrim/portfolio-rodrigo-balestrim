import Link from "next/link";

import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiBehanceLine,
  RiWhatsappLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/rodrigobalestrim/",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rodrigo-balestrim-9a68b3212/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/rodrigobalestr1",
    Icon: RiBehanceLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/5544997075042",
    Icon: RiWhatsappLine,
  },
  {
    name: "Github",
    link: "https://github.com/RodrigoBalestrim",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
