"use client";

import styles from "./styles.module.css";
import { ImageOptimized, PageSection, YoutubeVideo } from "@/components";
import { useRef } from "react";
import useMoonTranslate from "./useMoonTranslate";

const ShowreelsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionOffsetTop = sectionRef.current?.offsetTop ?? 0;

  const moonTranslate = useMoonTranslate({
    sectionOffsetTop,
    from: "left",
  });

  const moon2Translate = useMoonTranslate({
    sectionOffsetTop,
    from: "right",
  });

  return (
    <PageSection ref={sectionRef} section="showreels">
      <div className={styles.showreelsContent}>
        <YoutubeVideo isForShowreels videoId="5tM5YW1OYqE" />

        <div className={styles.moon} style={{ translate: moonTranslate }}>
          <ImageOptimized src="/moon.png" alt="Moon Image" />
          <div className={styles.showreelsTextContainer}>
            <h3 className={styles.showreelsText}>SHOWREELS</h3>
          </div>
        </div>

        <div className={styles.moon2} style={{ translate: moon2Translate }}>
          <ImageOptimized src="/moon3.png" alt="Moon Image" />
        </div>
      </div>
    </PageSection>
  );
};

export default ShowreelsSection;
