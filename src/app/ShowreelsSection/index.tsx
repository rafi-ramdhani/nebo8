"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { PageSection } from "@/components";
import { IMAGE_SIZES } from "@/constants/sizes";
import { useRef } from "react";
import useMoonTranslate from "./useMoonTranslate";

const ShowreelsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionOffsetTop = sectionRef.current?.offsetTop ?? 0;

  const moonTranslate = useMoonTranslate({
    sectionOffsetTop,
  });

  return (
    <PageSection ref={sectionRef} section="showreels">
      <div className={styles.showreelsContent}>
        <div className={styles.moon}>
          <Image
            fill
            sizes={IMAGE_SIZES}
            src="/moon.png"
            alt="Moon Image"
            style={{ translate: moonTranslate }}
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ShowreelsSection;
