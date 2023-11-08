import Image from "next/image";
import { PageSection } from "../components";
import styles from "./styles.module.css";

const FooterSection = () => {
  return (
    <PageSection section="footer">
      <div className={styles.footerContent}>
        <Image />
      </div>
    </PageSection>
  );
};

export default FooterSection;
