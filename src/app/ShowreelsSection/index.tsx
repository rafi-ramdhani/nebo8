import Image from "next/image";
import styles from "./styles.module.css";
import { PageSection } from "@/components";
import { IMAGE_SIZES } from "@/constants/sizes";

const ShowreelsSection = () => {
  return (
    <PageSection section="showreels">
      <div className={styles.showreelsContent}>
        <div className={styles.moon}>
          <Image fill sizes={IMAGE_SIZES} src="/moon.png" alt="Moon Image" />
        </div>
      </div>
    </PageSection>
  );
};

export default ShowreelsSection;
