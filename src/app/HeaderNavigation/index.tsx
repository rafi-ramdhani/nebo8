"use client";

import styles from "./styles.module.css";
import NeboLogo from "@/components/NeboLogo";
import useHeaderNavigation from "./useHeaderNavigation";
import NavigationItem from "./NavigationItem";
import { ImageOptimized } from "@/components";
import Link from "next/link";

const HeaderNavigation = () => {
  const {
    scrollY,
    navigations,
    showNavigations,
    selectedNavigation,
    handleSelectNavigation,
    handleShowNavigationToggle,
  } = useHeaderNavigation();

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
    <header
      className={`${styles.headerNavigation} ${
        scrollY > 100 ? styles.darkBackground : ""
      }`}
    >
      <div>
        <Link href="#home" className={styles.logoContainer}>
          <NeboLogo type="header" />
          <h3 className={styles.logoText}>Creative Agency</h3>
        </Link>

        <nav style={navStyle}>
          <ul>
            {navigations.map((navigation) => {
              return (
                <NavigationItem
                  key={navigation}
                  navigation={navigation}
                  showNavigations={showNavigations}
                  selectedNavigation={selectedNavigation}
                  onSelect={handleSelectNavigation}
                />
              );
            })}
          </ul>

          <div
            className={styles.navButtonContainer}
            style={navButtonStyle}
            onClick={handleShowNavigationToggle}
          >
            <div className={styles.navButton}>
              <ImageOptimized src="/nav-button.svg" alt="Navigation Button" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavigation;
