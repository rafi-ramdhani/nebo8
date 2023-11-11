import { ImageOptimized } from "@/components";
import styles from "./styles.module.css";
import { Service } from "../useService";
import {
  FIFTH_DESCRIPTION,
  FIFTH_DESCRIPTION_IMG,
  FIFTH_SERVICE_NAME,
  FIRST_DESCRIPTION,
  FIRST_DESCRIPTION_IMG,
  FIRST_SERVICE_NAME,
  FOURTH_DESCRIPTION,
  FOURTH_DESCRIPTION_IMG,
  FOURTH_SERVICE_NAME,
  SECOND_DESCRIPTION,
  SECOND_DESCRIPTION_IMG,
  SECOND_SERVICE_NAME,
  SEVENTH_DESCRIPTION,
  SEVENTH_DESCRIPTION_IMG,
  SEVENTH_SERVICE_NAME,
  SIXTH_DESCRIPTION,
  SIXTH_DESCRIPTION_IMG,
  SIXTH_SERVICE_NAME,
  THIRD_DESCRIPTION,
  THIRD_DESCRIPTION_IMG,
  THIRD_SERVICE_NAME,
} from "@/constants/services";
import { useEffect, useState } from "react";

type ServiceDescriptionProps = {
  service: Service;
};

type Fade = "fadeIn" | "fadeOut";

const ServiceDescription = ({ service }: ServiceDescriptionProps) => {
  const [fadeAnimation, setFadeAnimation] = useState<Fade>("fadeIn");
  const [displayedDescription, setDisplayedDescription] = useState<{
    imgSrc: string;
    description: string;
  } | null>(null);

  const imgSrc = (() => {
    switch (service.name) {
      case FIRST_SERVICE_NAME:
        return FIRST_DESCRIPTION_IMG;
      case SECOND_SERVICE_NAME:
        return SECOND_DESCRIPTION_IMG;
      case THIRD_SERVICE_NAME:
        return THIRD_DESCRIPTION_IMG;
      case FOURTH_SERVICE_NAME:
        return FOURTH_DESCRIPTION_IMG;
      case FIFTH_SERVICE_NAME:
        return FIFTH_DESCRIPTION_IMG;
      case SIXTH_SERVICE_NAME:
        return SIXTH_DESCRIPTION_IMG;
      case SEVENTH_SERVICE_NAME:
        return SEVENTH_DESCRIPTION_IMG;
      default:
        return "";
    }
  })();

  const description = (() => {
    switch (service.name) {
      case FIRST_SERVICE_NAME:
        return FIRST_DESCRIPTION;
      case SECOND_SERVICE_NAME:
        return SECOND_DESCRIPTION;
      case THIRD_SERVICE_NAME:
        return THIRD_DESCRIPTION;
      case FOURTH_SERVICE_NAME:
        return FOURTH_DESCRIPTION;
      case FIFTH_SERVICE_NAME:
        return FIFTH_DESCRIPTION;
      case SIXTH_SERVICE_NAME:
        return SIXTH_DESCRIPTION;
      case SEVENTH_SERVICE_NAME:
        return SEVENTH_DESCRIPTION;
      default:
        return "";
    }
  })();

  useEffect(() => {
    const hasDescription = !!imgSrc && !!description;
    if (!hasDescription) return;

    setFadeAnimation("fadeOut");

    const displayTimeout = setTimeout(() => {
      setDisplayedDescription({ imgSrc, description });
      setFadeAnimation("fadeIn");
    }, 200);

    return () => clearTimeout(displayTimeout);
  }, [imgSrc, description]);

  const canDisplay =
    !!displayedDescription?.imgSrc && !!displayedDescription?.description;

  if (!canDisplay) return null;

  return (
    <div className={`${styles.serviceDescription} ${styles[fadeAnimation]}`}>
      <ImageOptimized
        src={displayedDescription.imgSrc}
        alt="Background Image"
        className={styles.backgroundImage}
      />

      <h4 className={styles.description}>{displayedDescription.description}</h4>
    </div>
  );
};

export default ServiceDescription;
