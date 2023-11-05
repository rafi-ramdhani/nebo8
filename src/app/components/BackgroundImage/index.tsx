import Image from "next/image";
import styles from "./styles.module.css";

type BackgroundImageProps = {
  type: "home" | "service" | "showreels" | "contact" | "client" | "footer";
};

const BackgroundImage = ({ type }: BackgroundImageProps) => {
  return (
    <Image
      fill
      priority
      className={styles.backgroundImage}
      src={`/${type}-background.png`}
      alt="Background Image"
    />
  );
};

export default BackgroundImage;
