import { ImageOptimized, PageSection } from "@/components";
import styles from "./styles.module.css";
import Link from "next/link";
import NeboLogo from "@/components/NeboLogo";

const HomeSection = () => {
  return (
    <PageSection section="home">
      <div className={styles.homeContent}>
        <NeboLogo />
        <h2 className={styles.journeyText}>the journey starts now</h2>
        <Link href="#service">
          <div className={styles.doubleArrow}>
            <ImageOptimized src="/double-arrow.svg" alt="Double Arrow Icon" />
          </div>
        </Link>
      </div>
    </PageSection>
  );
};

export default HomeSection;
