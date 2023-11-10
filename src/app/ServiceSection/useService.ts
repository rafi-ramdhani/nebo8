import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

type ServiceClassName = {
  left: string;
  right: string;
  used: string;
};

type Service =
  | {
      name: "Photograph";
      videoId: "6y8d1oUClQE";
      className: ServiceClassName;
    }
  | {
      name: "2D & 3D Animation";
      videoId: "4YneDg6dH4U";
      className: ServiceClassName;
    }
  | {
      name: "Commercial";
      videoId: "n62M2pd0-p8";
      className: ServiceClassName;
    }
  | {
      name: "Video Production";
      videoId: "UIVhfDWSSKY";
      className: ServiceClassName;
    }
  | {
      name: "Corporate Video";
      videoId: "9vINAPof9Lk";
      className: ServiceClassName;
    }
  | {
      name: "Documentary Video";
      videoId: "U7ajKfnMby0";
      className: ServiceClassName;
    }
  | {
      name: "Lorem Ipsum";
      videoId: "YCMtaTi6kMQ";
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
  const [isReadyToSelect, setIsReadyToSelect] = useState(true);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(3);

  const [selectedService, setSelectedService] = useState<Service>({
    name: "Video Production",
    videoId: "UIVhfDWSSKY",
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
        name: "Photograph",
        videoId: "6y8d1oUClQE",
        className: serviceClassNames[0],
      },
      {
        name: "2D & 3D Animation",
        videoId: "4YneDg6dH4U",
        className: serviceClassNames[1],
      },
      {
        name: "Commercial",
        videoId: "n62M2pd0-p8",
        className: serviceClassNames[2],
      },
      {
        name: "Video Production",
        videoId: "UIVhfDWSSKY",
        className: serviceClassNames[3],
      },
      {
        name: "Corporate Video",
        videoId: "9vINAPof9Lk",
        className: serviceClassNames[4],
      },
      {
        name: "Documentary Video",
        videoId: "U7ajKfnMby0",
        className: serviceClassNames[5],
      },
      {
        name: "Lorem Ipsum",
        videoId: "YCMtaTi6kMQ",
        className: serviceClassNames[6],
      },
    ];
  }, [serviceClassNames]);

  const handleSelect = (direction: "left" | "right") => {
    setIsReadyToSelect(false);
    if (!isReadyToSelect) return;

    switch (direction) {
      case "left":
        setServiceClassNames((previousServiceClassNames) => {
          const lastServiceClassName =
            previousServiceClassNames[previousServiceClassNames.length - 1];
          const newServiceClassNames = [
            lastServiceClassName,
            ...previousServiceClassNames.slice(
              0,
              previousServiceClassNames.length - 1
            ),
          ].map((serviceClassName) => ({
            ...serviceClassName,
            used: serviceClassName.left,
          }));
          const selectedServiceIndex = newServiceClassNames.findIndex(
            ({ used }) => used.includes("serviceTextFour")
          );
          setSelectedServiceIndex(selectedServiceIndex);
          return newServiceClassNames;
        });
        break;

      case "right":
        setServiceClassNames((previousServiceClassNames) => {
          const firstServiceClassName = previousServiceClassNames[0];
          const newServiceClassNames = [
            ...previousServiceClassNames.slice(
              1,
              previousServiceClassNames.length
            ),
            firstServiceClassName,
          ].map((serviceClassName) => ({
            ...serviceClassName,
            used: serviceClassName.right,
          }));
          const selectedServiceIndex = newServiceClassNames.findIndex(
            ({ used }) => used.includes("serviceTextFour")
          );
          setSelectedServiceIndex(selectedServiceIndex);
          return newServiceClassNames;
        });
        break;

      default:
        break;
    }
  };

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