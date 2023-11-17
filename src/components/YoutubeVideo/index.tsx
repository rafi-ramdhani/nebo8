"use client";

import { useDimensions } from "@/hooks";
import styles from "./styles.module.css";
import YouTube, { YouTubeProps } from "react-youtube";

type YoutubeVideoProps = {
  videoId?: string;
  isForShowreels?: boolean;
};

const YoutubeVideo = ({
  videoId = "2g811Eo7K8U",
  isForShowreels = false,
}: YoutubeVideoProps) => {
  const { device } = useDimensions();

  const isDeviceTBD = device === "TBD";

  const sizeDecider = () => {
    let width = 828;
    let height = 514;

    switch (device) {
      case "laptop":
        width = isForShowreels ? 828 * 1.8 : 828;
        height = isForShowreels ? 514 * 1.8 : 514;
        width = width * 0.75;
        height = height * 0.75;
        break;
      case "tablet":
        width = isForShowreels ? 828 * 1.8 : 828;
        height = isForShowreels ? 514 * 1.8 : 514;
        width = width * 0.75 * 0.75;
        height = height * 0.75 * 0.75;
        break;
      case "phone":
        width = width * 0.75 * 0.75 * 0.75;
        height = height * 0.75 * 0.75 * 0.75;
        break;
      case "desktop":
        width = isForShowreels ? 828 * 1.8 : 828;
        height = isForShowreels ? 514 * 1.8 : 514;
      default:
        break;
    }

    return { width, height };
  };

  const { width, height } = sizeDecider();

  const containerClassNameDecider = () => {
    if (isForShowreels) {
      switch (device) {
        case "laptop":
        case "tablet":
        case "desktop":
          return styles.youtubeContainerShowreels;

        default:
          return styles.youtubeContainer;
      }
    }

    return styles.youtubeContainer;
  };

  const containerClassName = containerClassNameDecider();

  const opts: YouTubeProps["opts"] = {
    height,
    width,
  };

  if (isDeviceTBD) return null;

  return (
    <div className={containerClassName}>
      <YouTube opts={opts} videoId={videoId} className={styles.youtubeVideo} />
    </div>
  );
};

export default YoutubeVideo;
