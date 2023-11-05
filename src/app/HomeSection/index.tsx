import Image from "next/image";
import { PageSection } from "../components";
import NeboLogo from "../components/NeboLogo";
import styles from "./styles.module.css";
import Link from "next/link";

const HomeSection = () => {
  return (
    <PageSection section="home">
      <div className={styles.homeContent}>
        <NeboLogo />
        <h2 className={styles.journeyText}>the journey starts now</h2>
        <Link href="#service">
          <Image
            width={32}
            height={34}
            className={styles.doubleArrow}
            src="/double-arrow.svg"
            alt="Double Arrow Icon"
          />
        </Link>
      </div>
    </PageSection>
  );
};

export default HomeSection;
