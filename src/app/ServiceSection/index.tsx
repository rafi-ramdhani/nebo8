"use client";

import { PageSection, YoutubeVideo } from "@/components";
import styles from "./styles.module.css";
import useService from "./useService";
import NeboLogo from "@/components/NeboLogo";
import SelectionArrowButton from "./SelectionArrowButton";
import ServiceDescription from "./ServiceDescription";
import OrangeLine from "./OrangeLine";

const ServiceSection = () => {
  const { services, selectedService, handleSelectService } = useService();

  return (
    <PageSection section="service">
      <div className={styles.serviceContent}>
        <YoutubeVideo videoId="mf9wXZ1WjCY" />

        <OrangeLine />

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

      <ServiceDescription service={selectedService} />
    </PageSection>
  );
};

export default ServiceSection;
