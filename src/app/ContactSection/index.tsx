"use client";
import styles from "./styles.module.css";
import { ImageOptimized, PageSection } from "@/components";
import Link from "next/link";

const ContactSection = () => {
  return (
    <PageSection section="contact" style={{ marginTop: "-5rem" }}>
      <div className={styles.contactContent}>
        <div className={styles.innerContactContent}>
          <div className={styles.when}>
            <ImageOptimized src="/when.png" alt="When Image" />
          </div>

          <Link
            href="https://wa.me/+628111075757/?text=Halo,%20Saya%20mau%20tahu%20tentang%20Nebo8"
            // href="https://wa.me/+628111076600/?text=Halo,%20Saya%20mau%20tahu%20tentang%20Nebo8"
            target="_blank"
            className={styles.whatsappContainer}
          >
            <div className={styles.brief}>
              <ImageOptimized src="/brief.png" alt="Brief Image" />
            </div>

            <div className={styles.whatsapp}>
              <ImageOptimized src="/whatsapp.png" alt="Whatsapp Image" />
            </div>
          </Link>

          <div className={styles.astronaut}>
            <ImageOptimized src="/astronaut.png" alt="Astronaut Image" />
          </div>

          <div className={styles.rocket}>
            <ImageOptimized src="/rocket.png" alt="Rocket Image" />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ContactSection;
