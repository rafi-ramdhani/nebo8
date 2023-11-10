import Image from "next/image";
import { PageSection } from "@/components";
import styles from "./styles.module.css";
import Link from "next/link";
import NeboLogo from "@/components/NeboLogo";
import { IMAGE_SIZES } from "@/constants/sizes";

const HomeSection = () => {
  return (
    <PageSection section="home">
      <div className={styles.homeContent}>
        <NeboLogo />
        <h2 className={styles.journeyText}>the journey starts now</h2>
        <Link href="#service">
          <div className={styles.doubleArrow}>
            <Image
              fill
              sizes={IMAGE_SIZES}
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
