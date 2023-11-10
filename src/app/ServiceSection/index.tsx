"use client";

import { ImageOptimized, PageSection, YoutubeVideo } from "@/components";
import styles from "./styles.module.css";
import useService from "./useService";
import NeboLogo from "@/components/NeboLogo";

const SelectionArrowButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  return (
    <div className={styles.selectionArrow}>
      <ImageOptimized
        src={`/${direction}-double-arrow.svg`}
        alt="Left Arrow Icon"
        className={styles.selectionArrow}
        onClick={onClick}
      />
    </div>
  );
};

const ServiceSection = () => {
  const { services, selectedService, handleSelectService } = useService();

  return (
    <PageSection section="service">
      <div className={styles.serviceContent}>
        <YoutubeVideo videoId={selectedService.videoId} />
        <NeboLogo />
        <div className={styles.selection}>
          <SelectionArrowButton
            direction="left"
            onClick={() => handleSelectService("left")}
          />

          <div className={styles.serviceTextContainer}>
            {services.map((service) => {
              return (
                <h3
                  key={`${service.name}-${service.videoId}`}
                  className={service.className.used}
                >
                  {service.name}
                </h3>
              );
            })}
          </div>

          <SelectionArrowButton
            direction="right"
            onClick={() => handleSelectService("right")}
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ServiceSection;
