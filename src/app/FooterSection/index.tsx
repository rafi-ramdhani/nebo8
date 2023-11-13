import { ImageOptimized, PageSection } from "@/components";
import styles from "./styles.module.css";
import Link from "next/link";

const FooterSection = () => {
  return (
    <PageSection section="footer">
      <div className={styles.footerContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.neboText}>pt nebo8 indonesia</h1>
          <h4 className={styles.addressText}>
            Jl. BDN II No.22, RT.2/RW.11, Cilandak Barat, Kec. Cilandak, Kota
            Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430
          </h4>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactDetailContainer}>
            <div className={styles.mail}>
              <ImageOptimized src="/mail-icon.svg" alt="Mail Icon" />
            </div>
            <h4 className={styles.contactText}>Marketing@nebo.com</h4>
          </div>

          <div className={styles.contactDetailContainer}>
            <div className={styles.phone}>
              <ImageOptimized src="/phone-icon.svg" alt="Mail Icon" />
            </div>
            <h4 className={styles.contactText}>08111075757</h4>
          </div>
        </div>

        <div className={styles.locationContainer}>
          <div className={styles.location}>
            <ImageOptimized src="/location-icon.svg" alt="Location Icon" />
          </div>
          <h4 className={styles.navigateText}>Navigate To Us</h4>
          <Link
            href="https://maps.app.goo.gl/R8uMU1syQKsrd1VQ6?g_st=ic"
            target="_blank"
            className={styles.locationLink}
          >
            (Click Here)
          </Link>
        </div>

        <div className={styles.moon}>
          <ImageOptimized src="/moon2.png" alt="Moon" />
        </div>
      </div>
    </PageSection>
  );
};

export default FooterSection;
