import { useScroll } from "@/hooks";
import { useEffect, useState } from "react";

export type Navigation =
  | "home"
  | "service"
  | "showreels"
  | "contact"
  | "client"
  | "";

const useHeaderNavigation = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [showNavigations, setShowNavigations] = useState(true);
  const [selectedNavigation, setSelectedNavigation] = useState<Navigation>("");

  const { scrollY, direction, resetScroll } = useScroll();

  const navigations: Navigation[] = [
    "home",
    "service",
    "showreels",
    "contact",
    "client",
  ];

  const handleShowNavigationToggle = () => {
    setShowNavigations((prev) => !prev);
  };

  const handleSelectNavigation = (navigation: Navigation) => {
    setSelectedNavigation(navigation);
    resetScroll();
  };

  useEffect(() => {
    const isDown = direction === "down";
    if (isDown) setShowNavigations(false);
  }, [direction]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      resetScroll();
    }
  }, [isFirstRender, resetScroll]);

  return {
    scrollY,
    navigations,
    showNavigations,
    selectedNavigation,
    handleSelectNavigation,
    handleShowNavigationToggle,
  };
};

export default useHeaderNavigation;
