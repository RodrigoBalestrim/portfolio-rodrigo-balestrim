import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const message = [
      "Olá, Rodrigo! Gostaria de entrar em contato.",
      "",
      `Nome: ${formData.get("name")}`,
      `Assunto: ${formData.get("subject")}`,
      `Mensagem: ${formData.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/5544997075042?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full items-center bg-primary/30 px-4 py-28 xl:h-full xl:px-0">
      <div className="container mx-auto flex items-center justify-center text-center xl:h-full xl:py-32 xl:text-left">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Vamos <span className="text-accent">Conversar.</span>
          </motion.h2>
          <a href="https://wa.me/5544997075042" target="_blank" rel="noreferrer" className="mx-auto mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#25d366]">
            <FaWhatsapp className="text-xl" aria-hidden /> Falar pelo WhatsApp
          </a>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex w-full">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Mensagem..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn group mx-auto flex max-w-[220px] items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar pelo WhatsApp
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
