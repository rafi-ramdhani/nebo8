"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import NeboLogo from "@/components/NeboLogo";
import { IMAGE_SIZES } from "@/constants/sizes";
import useHeaderNavigation from "./useHeaderNavigation";
import NavigationItem from "./NavigationItem";

const HeaderNavigation = () => {
  const {
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
    <header className={styles.headerNavigation}>
      <div>
        <NeboLogo />

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
              <Image
                fill
                sizes={IMAGE_SIZES}
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
