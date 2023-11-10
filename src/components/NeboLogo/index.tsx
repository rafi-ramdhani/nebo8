import styles from "./styles.module.css";
import { ImageOptimized } from "..";

const NeboLogo = () => {
  return (
    <div className={styles.neboLogo}>
      <ImageOptimized src="/nebo-logo.svg" alt="Nebo8 Logo" />
    </div>
  );
};

export default NeboLogo;
