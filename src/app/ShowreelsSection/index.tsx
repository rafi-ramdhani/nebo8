import Image from "next/image";
import { PageSection } from "../components";
import styles from "./styles.module.css";

const ShowreelsSection = () => {
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <PageSection section="showreels">
      <div className={styles.showreelsContent}>
        <div className={styles.moon}>
          <Image fill sizes={imageSizes} src="/moon.png" alt="Moon Image" />
        </div>
      </div>
    </PageSection>
  );
};

export default ShowreelsSection;
