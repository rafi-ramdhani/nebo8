import styles from "./styles.module.css";
import { ImageOptimized } from "..";
import { CSSProperties } from "react";

const NeboLogo = ({
  type = "regular",
  style = {},
}: {
  type?: "header" | "regular";
  style?: CSSProperties;
}) => {
  const isHeader = type === "header";
  const imgSrc = isHeader ? "/nebo-logo-header.svg" : "/nebo-logo.svg";

  return (
    <div className={styles.neboLogo} style={style}>
      <ImageOptimized priority src={imgSrc} alt="Nebo8 Logo" />
    </div>
  );
};

export default NeboLogo;
