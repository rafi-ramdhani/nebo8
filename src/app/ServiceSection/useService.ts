import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import {
  FIFTH_SERVICE_NAME,
  FIFTH_VIDEO_ID,
  FIRST_SERVICE_NAME,
  FIRST_VIDEO_ID,
  FOURTH_SERVICE_NAME,
  FOURTH_VIDEO_ID,
  FifthServiceName,
  FifthVideoId,
  FirstServiceName,
  FirstVideoId,
  FourthServiceName,
  FourthVideoId,
  SECOND_SERVICE_NAME,
  SECOND_VIDEO_ID,
  SEVENTH_SERVICE_NAME,
  SEVENTH_VIDEO_ID,
  SIXTH_SERVICE_NAME,
  SIXTH_VIDEO_ID,
  SecondServiceName,
  SecondVideoId,
  SeventhServiceName,
  SeventhVideoId,
  SixthServiceName,
  SixthVideoId,
  THIRD_SERVICE_NAME,
  THIRD_VIDEO_ID,
  ThirdServiceName,
  ThirdVideoId,
} from "@/constants/services";

type Direction = "left" | "right";

type ServiceClassName = {
  left: string;
  right: string;
  used: string;
};

export type Service =
  | {
      name: FirstServiceName;
      videoId: FirstVideoId;
      className: ServiceClassName;
    }
  | {
      name: SecondServiceName;
      videoId: SecondVideoId;
      className: ServiceClassName;
    }
  | {
      name: ThirdServiceName;
      videoId: ThirdVideoId;
      className: ServiceClassName;
    }
  | {
      name: FourthServiceName;
      videoId: FourthVideoId;
      className: ServiceClassName;
    }
  | {
      name: FifthServiceName;
      videoId: FifthVideoId;
      className: ServiceClassName;
    }
  | {
      name: SixthServiceName;
      videoId: SixthVideoId;
      className: ServiceClassName;
    }
  | {
      name: SeventhServiceName;
      videoId: SeventhVideoId;
      className: ServiceClassName;
    };

const serviceClassName = (
  order: "One" | "Two" | "Three" | "Four" | "Five" | "Six" | "Seven",
  direction: "Left" | "Right"
) => {
  const uniqueClassName = styles[`serviceText${order}${direction}`];
  const floatClassName = styles[`serviceText${order}Float`];
  return `${styles.serviceText} ${uniqueClassName} ${floatClassName}`;
};

const useService = () => {
  const [skipServiceSelectionDirection, setSkipServiceSelectionDirection] =
    useState<Direction | "">("");
  const [isReadyToSelect, setIsReadyToSelect] = useState(true);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(3);

  const [selectedService, setSelectedService] = useState<Service>({
    name: FOURTH_SERVICE_NAME,
    videoId: FOURTH_VIDEO_ID,
    className: {
      left: serviceClassName("Four", "Left"),
      right: serviceClassName("Four", "Right"),
      used: serviceClassName("Four", "Left"),
    },
  });

  const [serviceClassNames, setServiceClassNames] = useState<
    ServiceClassName[]
  >([
    {
      left: serviceClassName("One", "Left"),
      right: serviceClassName("One", "Right"),
      used: serviceClassName("One", "Left"),
    },
    {
      left: serviceClassName("Two", "Left"),
      right: serviceClassName("Two", "Right"),
      used: serviceClassName("Two", "Left"),
    },
    {
      left: serviceClassName("Three", "Left"),
      right: serviceClassName("Three", "Right"),
      used: serviceClassName("Three", "Left"),
    },
    {
      left: serviceClassName("Four", "Left"),
      right: serviceClassName("Four", "Right"),
      used: serviceClassName("Four", "Left"),
    },
    {
      left: serviceClassName("Five", "Left"),
      right: serviceClassName("Five", "Right"),
      used: serviceClassName("Five", "Left"),
    },
    {
      left: serviceClassName("Six", "Left"),
      right: serviceClassName("Six", "Right"),
      used: serviceClassName("Six", "Left"),
    },
    {
      left: serviceClassName("Seven", "Left"),
      right: serviceClassName("Seven", "Right"),
      used: serviceClassName("Seven", "Left"),
    },
  ]);

  const services: Service[] = useMemo(() => {
    return [
      {
        name: FIRST_SERVICE_NAME,
        videoId: FIRST_VIDEO_ID,
        className: serviceClassNames[0],
      },
      {
        name: SECOND_SERVICE_NAME,
        videoId: SECOND_VIDEO_ID,
        className: serviceClassNames[1],
      },
      {
        name: THIRD_SERVICE_NAME,
        videoId: THIRD_VIDEO_ID,
        className: serviceClassNames[2],
      },
      {
        name: FOURTH_SERVICE_NAME,
        videoId: FOURTH_VIDEO_ID,
        className: serviceClassNames[3],
      },
      {
        name: FIFTH_SERVICE_NAME,
        videoId: FIFTH_VIDEO_ID,
        className: serviceClassNames[4],
      },
      {
        name: SIXTH_SERVICE_NAME,
        videoId: SIXTH_VIDEO_ID,
        className: serviceClassNames[5],
      },
      {
        name: SEVENTH_SERVICE_NAME,
        videoId: SEVENTH_VIDEO_ID,
        className: serviceClassNames[6],
      },
    ];
  }, [serviceClassNames]);

  const handleSelect = useCallback(
    (direction: Direction) => {
      setIsReadyToSelect(false);
      if (!isReadyToSelect) return;

      const EMPTY_SERVICE_INDEX = 0;

      switch (direction) {
        case "left":
          setServiceClassNames((prev) => {
            const lastServiceClassName = prev[prev.length - 1];

            const newServiceClassNames = [
              lastServiceClassName,
              ...prev.slice(0, prev.length - 1),
            ].map((serviceClassName) => ({
              ...serviceClassName,
              used: serviceClassName.left,
            }));

            const selectedServiceIndex = newServiceClassNames.findIndex(
              ({ used }) => used.includes("serviceTextFour")
            );

            const isEmptyServiceIndex =
              selectedServiceIndex === EMPTY_SERVICE_INDEX;

            if (isEmptyServiceIndex) {
              setSkipServiceSelectionDirection(direction);
            }

            setSelectedServiceIndex(selectedServiceIndex);
            return newServiceClassNames;
          });
          break;

        case "right":
          setServiceClassNames((prev) => {
            const firstServiceClassName = prev[0];

            const newServiceClassNames = [
              ...prev.slice(1, prev.length),
              firstServiceClassName,
            ].map((serviceClassName) => ({
              ...serviceClassName,
              used: serviceClassName.right,
            }));

            const selectedServiceIndex = newServiceClassNames.findIndex(
              ({ used }) => used.includes("serviceTextFour")
            );

            const isEmptyServiceIndex =
              selectedServiceIndex === EMPTY_SERVICE_INDEX;

            if (isEmptyServiceIndex) {
              setSkipServiceSelectionDirection(direction);
            }

            setSelectedServiceIndex(selectedServiceIndex);
            return newServiceClassNames;
          });
          break;

        default:
          break;
      }
    },
    [isReadyToSelect]
  );

  // To skip service selection (if the service is empty)
  useEffect(() => {
    if (skipServiceSelectionDirection && isReadyToSelect) {
      const skipTimeout = setTimeout(() => {
        handleSelect(skipServiceSelectionDirection);
        setSkipServiceSelectionDirection("");
      }, 100);

      return () => clearTimeout(skipTimeout);
    }
  }, [isReadyToSelect, skipServiceSelectionDirection, handleSelect]);

  // To prevent rapid service selection
  useEffect(() => {
    if (!isReadyToSelect) {
      const isReadyToSelectTimeout = setTimeout(() => {
        setIsReadyToSelect(true);
      }, 200);

      return () => clearTimeout(isReadyToSelectTimeout);
    }

    const selectServiceTimeout = setTimeout(() => {
      setSelectedService(services[selectedServiceIndex]);
    }, 200);

    return () => clearTimeout(selectServiceTimeout);
  }, [selectedServiceIndex, services, isReadyToSelect]);

  return { services, selectedService, handleSelectService: handleSelect };
};

export default useService;
