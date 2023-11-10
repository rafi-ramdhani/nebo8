import Image from "next/image";
import styles from "./styles.module.css";

type BackgroundImageProps = {
  type: "home" | "service" | "showreels" | "contact" | "client" | "footer";
};

const BackgroundImage = ({ type }: BackgroundImageProps) => {
  if (type === "home") {
    return (
      <Image
        fill
        priority
        quality={100}
        className={styles.backgroundImage}
        src={`/giphy.gif`}
        alt="Background Image"
      />
    );
  }

  return (
    <Image
      fill
      priority
      quality={100}
      className={styles.backgroundImage}
      src={`/${type}-background.png`}
      alt="Background Image"
    />
  );
};

export default BackgroundImage;
