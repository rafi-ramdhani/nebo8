"use client";

import { useEffect, useState } from "react";
import { PageSection, YoutubeVideo } from "../components";
import NeboLogo from "../components/NeboLogo";
import styles from "./styles.module.css";
import Image from "next/image";

type Service =
  | "6y8d1oUClQE"
  | "4YneDg6dH4U"
  | "n62M2pd0-p8"
  | "UIVhfDWSSKY"
  | "9vINAPof9Lk"
  | "U7ajKfnMby0"
  | "YCMtaTi6kMQ";

const ServiceSection = () => {
  const [selectedService, setSelectedService] =
    useState<Service>("UIVhfDWSSKY");
  const [services, setServices] = useState<Service[]>([
    "6y8d1oUClQE",
    "4YneDg6dH4U",
    "n62M2pd0-p8",
    "UIVhfDWSSKY",
    "9vINAPof9Lk",
    "U7ajKfnMby0",
    "YCMtaTi6kMQ",
  ]);

  useEffect(() => {
    const selectTimeout = setTimeout(() => {
      setSelectedService(services[3]);
    }, 500);

    return () => clearTimeout(selectTimeout);
  }, [services]);

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
        <YoutubeVideo videoId={selectedService} />
        <NeboLogo />
        <div className={styles.selection}>
          <Image
            width={38}
            height={53}
            src="/left-double-arrow.svg"
            alt="Left Arrow Icon"
            onClick={() => handleSelect("left")}
          />
          <div className={styles.serviceTextContainer}>
            <h3
              className={styles.serviceText}
              style={{ top: "-30rem", left: "-40rem" }}
            >
              {services[0]}
            </h3>
            <h3
              className={styles.serviceText}
              style={{ top: "-20rem", left: "-50rem" }}
            >
              {services[1]}
            </h3>
            <h3
              className={styles.serviceText}
              style={{ top: "-8rem", left: "-28rem" }}
            >
              {services[2]}
            </h3>
            <h3
              className={`${styles.serviceText} ${styles.selectedServiceText}`}
            >
              {services[3]}
            </h3>
            <h3
              className={styles.serviceText}
              style={{ top: "-8rem", left: "28rem" }}
            >
              {services[4]}
            </h3>
            <h3
              className={styles.serviceText}
              style={{ top: "-20rem", left: "50rem" }}
            >
              {services[5]}
            </h3>
            <h3
              className={styles.serviceText}
              style={{ top: "-30rem", left: "40rem" }}
            >
              {services[6]}
            </h3>
          </div>
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
