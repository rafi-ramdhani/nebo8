"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import NeboLogo from "../components/NeboLogo";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "../hooks";

type Navigation = "home" | "service" | "showreels" | "contact" | "";

const HeaderNavigation = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [showNavigations, setShowNavigations] = useState(true);
  const [selectedNavigation, setSelectedNavigation] = useState<Navigation>("");

  const { direction, resetDirection, enableDetection, disableDetection } =
    useScroll();

  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  const navigations: Navigation[] = ["home", "service", "showreels", "contact"];

  const resetScrollRef = useRef<NodeJS.Timeout>();

  const handleClickToggle = () => {
    setShowNavigations((prev) => !prev);
  };

  const handleSelectNavigation = (navigation: Navigation) => {
    setSelectedNavigation(navigation);
    disableDetection();
    clearTimeout(resetScrollRef.current);
    resetScrollRef.current = setTimeout(() => {
      resetDirection();
      enableDetection();
    }, 1000);
  };

  useEffect(() => {
    const isDown = direction === "down";
    if (isDown && showNavigations) setShowNavigations(false);
  }, [direction, showNavigations]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      disableDetection();
      const enableTimeout = setTimeout(enableDetection, 1000);
      return () => clearTimeout(enableTimeout);
    }
  }, [isFirstRender, enableDetection, disableDetection]);

  const hidingStyle = {
    transition: "all 0.2s ease-in",
    translate: showNavigations ? "0rem" : "40rem 0rem",
  };

  const navStyle = {
    backgroundColor: !showNavigations
      ? "transparent"
      : "rgba(255, 255, 255, 0.5)",
  };

  const navButtonStyle = {
    rotate: showNavigations ? "90deg" : "0deg",
    backgroundColor: showNavigations
      ? "transparent"
      : "rgba(255, 255, 255, 0.5)",
  };

  return (
    <header className={styles.headerNavigation}>
      <div>
        <NeboLogo />

        <nav style={navStyle}>
          <ul>
            {navigations.map((navigation) => {
              const isSelected = selectedNavigation === navigation;
              const showHighlight = isSelected && showNavigations;

              return (
                <li key={navigation} style={hidingStyle}>
                  <Link
                    href={`#${navigation}`}
                    onClick={() => handleSelectNavigation(navigation)}
                  >
                    {navigation}
                  </Link>
                  {showHighlight && <div className={styles.highlight} />}
                </li>
              );
            })}
          </ul>

          <div
            className={styles.navButtonContainer}
            style={navButtonStyle}
            onClick={handleClickToggle}
          >
            <div className={styles.navButton}>
              <Image
                fill
                sizes={imageSizes}
                src="/nav-button.svg"
                alt="Navigation Button"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavigation;
