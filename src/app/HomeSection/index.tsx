import Image from "next/image";
import { PageSection } from "../components";
import NeboLogo from "../components/NeboLogo";
import styles from "./styles.module.css";
import Link from "next/link";

const HomeSection = () => {
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <PageSection section="home">
      <div className={styles.homeContent}>
        <NeboLogo />
        <h2 className={styles.journeyText}>the journey starts now</h2>
        <Link href="#service">
          <div className={styles.doubleArrow}>
            <Image
              fill
              sizes={imageSizes}
              src="/double-arrow.svg"
              alt="Double Arrow Icon"
            />
          </div>
        </Link>
      </div>
    </PageSection>
  );
};

export default HomeSection;
