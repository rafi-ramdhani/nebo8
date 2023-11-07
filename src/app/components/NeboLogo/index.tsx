import Image from "next/image";
import styles from "./styles.module.css";

const NeboLogo = () => {
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <div className={styles.neboLogo}>
      <Image
        fill
        priority
        sizes={imageSizes}
        src="/nebo-logo.svg"
        alt="Nebo8 Logo"
      />
    </div>
  );
};

export default NeboLogo;
