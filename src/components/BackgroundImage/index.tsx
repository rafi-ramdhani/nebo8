import styles from "./styles.module.css";
import { ImageOptimized } from "..";

type BackgroundImageProps = {
  type: "home" | "service" | "showreels" | "contact" | "client" | "footer";
};

const BackgroundImage = ({ type }: BackgroundImageProps) => {
  return (
    <ImageOptimized
      priority
      src={`/${type}-background.png`}
      alt="Background Image"
      quality={type === "home" ? 100 : 75}
      className={styles.backgroundImage}
    />
  );
};

export default BackgroundImage;
