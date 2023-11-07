"use client";

import { useDimensions } from "@/app/hooks";
import styles from "./styles.module.css";
import YouTube, { YouTubeProps } from "react-youtube";

type YoutubeVideoProps = {
  videoId?: string;
};

const YoutubeVideo = ({ videoId = "2g811Eo7K8U" }: YoutubeVideoProps) => {
  const { device } = useDimensions();

  const isDeviceTBD = device === "TBD";

  const sizeDecider = () => {
    let width = 828;
    let height = 514;

    switch (device) {
      case "laptop":
        width = width * 0.75;
        height = height * 0.75;
        break;
      case "tablet":
        width = width * 0.75 * 0.75;
        height = height * 0.75 * 0.75;
        break;
      case "phone":
        width = width * 0.75 * 0.75 * 0.75;
        height = height * 0.75 * 0.75 * 0.75;
        break;
      case "desktop":
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
    <YouTube opts={opts} videoId={videoId} className={styles.youtubeVideo} />
  );
};

export default YoutubeVideo;
