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

  const widthDecider = () => {
    switch (device) {
      case "phone":
      case "tablet":
        return "100%";

      default:
        return "828";
    }
  };

  const width = widthDecider();

  const opts: YouTubeProps["opts"] = {
    height: "514",
    width,
  };

  if (isDeviceTBD) return null;

  return (
    <YouTube
      opts={opts}
      videoId={videoId}
      className={styles.youtubeVideo}
    />
  );
};

export default YoutubeVideo;
