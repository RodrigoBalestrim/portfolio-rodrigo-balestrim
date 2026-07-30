import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const portfolioPages = ["/", "/about", "/services", "/portfoliorodrigobalestrim", "/testimonials", "/contact"];

const PageWheelNavigation = () => {
  const router = useRouter();
  const isChangingPage = useRef(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (window.innerWidth < 1280 || isChangingPage.current || Math.abs(event.deltaY) < 24) return;
      if (event.target.closest("input, textarea, select, [data-wheel-scroll]")) return;

      const currentIndex = portfolioPages.indexOf(router.pathname);
      const nextIndex = currentIndex + (event.deltaY > 0 ? 1 : -1);
      if (currentIndex === -1 || nextIndex < 0 || nextIndex >= portfolioPages.length) return;

      event.preventDefault();
      isChangingPage.current = true;
      router.push(portfolioPages[nextIndex]).finally(() => {
        window.setTimeout(() => {
          isChangingPage.current = false;
        }, 420);
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [router]);

  return null;
};

export default PageWheelNavigation;
