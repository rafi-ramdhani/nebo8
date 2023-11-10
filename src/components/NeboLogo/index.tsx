import Image from "next/image";
import styles from "./styles.module.css";
import { IMAGE_SIZES } from "@/constants/sizes";

const NeboLogo = () => {
  return (
    <div className={styles.neboLogo}>
      <Image
        fill
        priority
        sizes={IMAGE_SIZES}
        src="/nebo-logo.svg"
        alt="Nebo8 Logo"
      />
    </div>
  );
};

export default NeboLogo;
