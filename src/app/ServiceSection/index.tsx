"use client";

import { useState } from "react";
import { PageSection, YoutubeVideo } from "../components";
import NeboLogo from "../components/NeboLogo";
import styles from "./styles.module.css";
import Image from "next/image";

const ServiceSection = () => {
  const [services, setServices] = useState([
    "6y8d1oUClQE",
    "4YneDg6dH4U",
    "n62M2pd0-p8",
    "UIVhfDWSSKY",
    "9vINAPof9Lk",
    "U7ajKfnMby0",
    "YCMtaTi6kMQ",
  ]);

  const handleSelect = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        setServices((previousServices) => {
          const firstService = previousServices[0];
          const newServices = [
            ...previousServices.slice(1, previousServices.length),
            firstService,
          ];
          return newServices;
        });
        break;

      case "right":
        setServices((previousServices) => {
          const lastService = previousServices[previousServices.length - 1];
          const newServices = [
            lastService,
            ...previousServices.slice(0, previousServices.length - 1),
          ];
          return newServices;
        });
        break;

      default:
        break;
    }
  };

  return (
    <PageSection section="service">
      <div className={styles.serviceContent}>
        <YoutubeVideo videoId={services[3]} />
        <NeboLogo />
        <div className={styles.selection}>
          <Image
            width={38}
            height={53}
            src="/left-double-arrow.svg"
            alt="Left Arrow Icon"
            onClick={() => handleSelect("left")}
          />
          <h3 className={styles.serviceText}>{services[3]}</h3>
          <Image
            width={38}
            height={53}
            src="/right-double-arrow.svg"
            alt="Right Arrow Icon"
            onClick={() => handleSelect("right")}
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ServiceSection;
