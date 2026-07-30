import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Esta animação envolve todas as rotas do portfólio. A rotação e a
  // profundidade dão o mesmo efeito 3D ao trocar de página.
  const pageVariants = {
    initial: {
      opacity: 0,
      rotateX: 3,
      rotateY: -12,
      scale: 0.96,
      z: -120,
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      z: 0,
    },
    exit: {
      opacity: 0,
      rotateX: -3,
      rotateY: 12,
      scale: 0.96,
      z: -120,
    },
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          className="relative h-full overflow-hidden bg-primary"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformPerspective: 1600,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
