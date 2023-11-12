import { ImageOptimized, PageSection } from "@/components";
import styles from "./styles.module.css";

const FooterSection = () => {
  return (
    <PageSection section="footer">
      <div className={styles.footerContent}>
        <div className={styles.homeContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.neboText}>pt nebo8 indonesia</h1>
            <h4 className={styles.addressText}>
              Jl. BDN II No.22, RT.2/RW.11, Cilandak Barat, Kec. Cilandak, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430
            </h4>
          </div>
        </div>
        <div className={styles.moon}>
          <ImageOptimized src="/moon2.png" alt="Moon" />
        </div>
      </div>
    </PageSection>
  );
};

export default FooterSection;
