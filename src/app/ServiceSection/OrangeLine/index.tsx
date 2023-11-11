import { ImageOptimized } from "@/components";
import styles from "./styles.module.css";

const OrangeLine = () => {
  return (
    <div className={styles.orangeLineContainer}>
      <div className={styles.orangeLine}>
        <ImageOptimized src="/orange-line.png" alt="Orange Line" />
      </div>
    </div>
  );
};

export default OrangeLine;
