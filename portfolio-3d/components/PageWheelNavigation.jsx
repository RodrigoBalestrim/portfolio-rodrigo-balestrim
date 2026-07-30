import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const portfolioPages = ["/", "/about", "/services", "/projetos", "/testimonials", "/contact"];

const PageWheelNavigation = () => {
  const router = useRouter();
  const isChangingPage = useRef(false);
  const touchStartY = useRef(null);

  useEffect(() => {
    const isInteractiveElement = (target) =>
      target?.closest?.("input, textarea, select, button, a, [data-wheel-scroll]");

    const changePage = (direction) => {
      if (isChangingPage.current) return;
      const currentIndex = portfolioPages.indexOf(router.pathname);
      if (currentIndex === -1) return;

      const nextIndex =
        (currentIndex + direction + portfolioPages.length) % portfolioPages.length;

      isChangingPage.current = true;
      router.push(portfolioPages[nextIndex]).finally(() => {
        window.setTimeout(() => {
          isChangingPage.current = false;
        }, 700);
      });
    };

    const handleWheel = (event) => {
      if (isChangingPage.current || Math.abs(event.deltaY) < 24) return;
      if (isInteractiveElement(event.target)) return;

      event.preventDefault();
      changePage(event.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (event) => {
      if (isInteractiveElement(event.target)) return;
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event) => {
      if (touchStartY.current === null || isInteractiveElement(event.target)) return;

      const touchEndY = event.changedTouches[0]?.clientY;
      const distance = touchStartY.current - touchEndY;
      touchStartY.current = null;

      if (Math.abs(distance) >= 56) {
        changePage(distance > 0 ? 1 : -1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router]);

  return null;
};

export default PageWheelNavigation;
