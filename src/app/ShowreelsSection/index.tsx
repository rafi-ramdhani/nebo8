"use client";

import styles from "./styles.module.css";
import { ImageOptimized, PageSection } from "@/components";
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
          <ImageOptimized
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
