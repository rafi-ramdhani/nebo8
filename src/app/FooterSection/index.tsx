import { ImageOptimized, PageSection } from "@/components";
import styles from "./styles.module.css";
import Link from "next/link";

const FooterSection = () => {
  return (
    <PageSection section="footer">
      <div className={styles.footerContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.neboText}>pt. nebo creative jaya</h1>
          <h4 className={styles.addressText}>
            Jl. BDN II No.22, RT.2/RW.11, Cilandak Barat, Kec. Cilandak, Kota
            Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430
          </h4>
        </div>

        <div className={styles.contactContainer}>
          <Link
            href="mailto:marketing@nebo8.com"
            className={styles.contactDetailContainer}
          >
            <div className={styles.mail}>
              <ImageOptimized src="/mail-icon.svg" alt="Mail Icon" />
            </div>
            <h4 className={styles.contactText}>marketing@nebo8.com</h4>
          </Link>

          <Link
            href="https://wa.me/+628111075757/?text=Halo,%20Saya%20mau%20tahu%20tentang%20Nebo8"
            target="_blank"
            className={styles.contactDetailContainer}
          >
            <div className={styles.phone}>
              <ImageOptimized src="/phone-icon.svg" alt="Mail Icon" />
            </div>
            <h4 className={styles.contactText}>+62 811-1075-757</h4>
          </Link>

          <Link
            href="https://drive.google.com/drive/folders/1e4-gH9rBSQzsmSajRbhwx2O-Ut15Yrzv?usp=drive_link"
            target="_blank"
            // href="/test-download.xlsx"
            // download
            className={styles.contactDetailContainer}
          >
            <div className={styles.building}>
              <ImageOptimized src="/building-icon.svg" alt="Location Icon" />
            </div>
            <h4 className={styles.contactText}>Company Profile</h4>
          </Link>

          <Link
            href="https://maps.app.goo.gl/n9imiMqyuoT51xF9A"
            target="_blank"
            className={styles.contactDetailContainer}
          >
            <div className={styles.location}>
              <ImageOptimized src="/location-icon.svg" alt="Location Icon" />
            </div>
            <h4 className={styles.contactText}>Navigate To Us</h4>
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
