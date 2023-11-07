import Image from "next/image";
import { PageSection } from "../components";
import styles from "./styles.module.css";

const ShowreelsSection = () => {
  return (
    <PageSection section="showreels">
      <div className={styles.showreelsContent}>
        <Image
          className={styles.moon}
          width={522}
          height={1068}
          src="/moon.png"
          alt="Moon Image"
        />
      </div>
    </PageSection>
  );
};

export default ShowreelsSection;
