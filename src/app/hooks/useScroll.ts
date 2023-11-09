import { useState, useEffect, useCallback, useRef } from "react";

type Direction = "up" | "down" | "";

const useScroll = () => {
  const [scrollDir, setScrollDir] = useState<Direction>("");
  const [isDisabled, setIsDisabled] = useState(false);

  const resetScrollRef = useRef<NodeJS.Timeout>();

  const disableDetection = useCallback(() => setIsDisabled(true), []);
  const enableDetection = useCallback(() => setIsDisabled(false), []);

  const resetDirection = useCallback(() => setScrollDir(""), []);

  const resetScroll = useCallback(() => {
    disableDetection();
    clearTimeout(resetScrollRef.current);
    resetScrollRef.current = setTimeout(() => {
      resetDirection();
      enableDetection();
    }, 1000);
  }, [disableDetection, enableDetection, resetDirection]);

  useEffect(() => {
    if (isDisabled) return;

    const threshold = 100;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, isDisabled]);

  return {
    direction: scrollDir,
    resetScroll,
  };
};

export default useScroll;
