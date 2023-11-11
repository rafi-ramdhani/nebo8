import { ImageOptimized } from "@/components";
import styles from "./styles.module.css";

const SelectionArrowButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  return (
    <div className={styles.selectionArrow}>
      <ImageOptimized
        src={`/${direction}-double-arrow.svg`}
        alt="Left Arrow Icon"
        className={styles.selectionArrow}
        onClick={onClick}
      />
    </div>
  );
};

export default SelectionArrowButton;
