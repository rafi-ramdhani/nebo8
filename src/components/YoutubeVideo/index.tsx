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
    const SHOWREELS_WIDTH = 1220;
    const SHOWREELS_HEIGHT = 686.25;
    const REGULAR_WIDTH = 828;
    const REGULAR_HEIGHT = 514;

    let width = REGULAR_WIDTH;
    let height = REGULAR_HEIGHT;

    switch (device) {
      case "laptop":
        if (isForShowreels) {
          width = SHOWREELS_WIDTH;
          height = SHOWREELS_HEIGHT;
        }
        width = width * 0.75;
        height = height * 0.75;
        break;
      case "tablet":
        if (isForShowreels) {
          width = SHOWREELS_WIDTH;
          height = SHOWREELS_HEIGHT;
        }
        width = width * 0.75 * 0.75;
        height = height * 0.75 * 0.75;
        break;
      case "phone":
        width = width * 0.75 * 0.75 * 0.75;
        height = height * 0.75 * 0.75 * 0.75;
        break;
      case "desktop":
        if (isForShowreels) {
          width = SHOWREELS_WIDTH;
          height = SHOWREELS_HEIGHT;
        }
        break;
      default:
        break;
    }

    return { width, height };
  };

  const { width, height } = sizeDecider();

  const opts: YouTubeProps["opts"] = {
    height,
    width,
  };

  if (isDeviceTBD) return null;

  return (
    <div className={styles.youtubeContainer}>
      <YouTube opts={opts} videoId={videoId} className={styles.youtubeVideo} />
    </div>
  );
};

export default YoutubeVideo;
