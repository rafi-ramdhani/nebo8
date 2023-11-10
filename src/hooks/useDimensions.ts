import { useEffect, useState } from "react";

const useDimensions = () => {
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  const hasResized = width > 0 || height > 0;

  const deviceDecider = ():
    | "phone"
    | "tablet"
    | "laptop"
    | "desktop"
    | "TBD"
    | "" => {
    const canBeDetermined = width > 0;

    if (!canBeDetermined) return "TBD";

    const isPhone = width < 768;
    const isTablet = width >= 768 && width < 1280;
    const isLaptop = width >= 1280 && width < 1920;
    const isDesktop = width >= 1920;

    if (isPhone) return "phone";
    if (isTablet) return "tablet";
    if (isLaptop) return "laptop";
    if (isDesktop) return "desktop";
    return "";
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    if (!hasResized) handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasResized]);

  return { width, height, device: deviceDecider() };
};

export default useDimensions;
