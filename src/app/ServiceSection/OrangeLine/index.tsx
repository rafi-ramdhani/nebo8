import { ImageOptimized } from "@/components";
import styles from "./styles.module.css";

const OrangeDot = ({ order }: { order: number }) => {
  return null
  return (
    <div className={styles[`orangeDot${order}`]}>
      <ImageOptimized src="/orange-dot.png" alt="Orange Dot" />
    </div>
  );
};

const OrangeLine = () => {
  return (
    <div className={styles.orangeLineContainer}>
      <div className={styles.orangeLine}>
        <ImageOptimized src="/orange-line.png" alt="Orange Line" />
      </div>
      <OrangeDot order={1} />
      <OrangeDot order={2} />
      <OrangeDot order={3} />
      <OrangeDot order={4} />
      <OrangeDot order={5} />
      <OrangeDot order={6} />
    </div>
  );
};

export default OrangeLine;
