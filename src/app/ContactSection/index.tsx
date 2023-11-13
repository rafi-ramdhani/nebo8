"use client";
import styles from "./styles.module.css";
import { ImageOptimized, PageSection } from "@/components";
import Link from "next/link";

const ContactSection = () => {
  return (
    <PageSection section="contact">
      <div className={styles.contactContent}>
        <div className={styles.when}>
          <ImageOptimized src="/when.png" alt="When Image" />
        </div>
        <div className={styles.whatsappContainer}>
          <div className={styles.brief}>
            <ImageOptimized src="/brief.png" alt="Brief Image" />
          </div>
          <Link
            href="https://wa.me/+628111075757"
            target="_blank"
            className={styles.whatsapp}
          >
            <ImageOptimized src="/whatsapp.png" alt="Whatsapp Image" />
          </Link>
        </div>
        <div className={styles.astronaut}>
          <ImageOptimized src="/astronaut.png" alt="Astronaut Image" />
        </div>
        <div className={styles.rocket}>
          <ImageOptimized src="/rocket.png" alt="Rocket Image" />
        </div>
      </div>
    </PageSection>
  );
};

export default ContactSection;
