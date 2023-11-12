import { ImageOptimized, PageSection } from "@/components";
import styles from "./styles.module.css";

const FooterSection = () => {
  return (
    <PageSection section="footer">
      <div className={styles.footerContent}>
        <div className={styles.moon}>
          <ImageOptimized src="/moon2.png" alt="Moon" />
        </div>
      </div>
    </PageSection>
  );
};

export default FooterSection;
