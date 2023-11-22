import styles from "./styles.module.css";
import { ImageOptimized } from "..";

type BackgroundImageProps = {
  type: "home" | "service" | "showreels" | "contact" | "client" | "footer";
};

const BackgroundImage = ({ type }: BackgroundImageProps) => {
  return (
    <ImageOptimized
      priority
      unoptimized={type === "home" || type === "client"}
      src={`/${type}-background.png`}
      alt="Background Image"
      className={styles.backgroundImage}
    />
  );
};

export default BackgroundImage;
