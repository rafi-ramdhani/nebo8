import Image from "next/image";
import styles from "./styles.module.css";
import { PageSection } from "@/components";
import { IMAGE_SIZES } from "@/constants/sizes";

const ContactSection = () => {
  return (
    <PageSection section="contact">
      <div className={styles.contactContent}>
        <div className={styles.when}>
          <Image fill sizes={IMAGE_SIZES} src="/when.png" alt="When Image" />
        </div>
        <div className={styles.whatsappContainer}>
          <div className={styles.brief}>
            <Image
              fill
              sizes={IMAGE_SIZES}
              src="/brief.png"
              alt="Brief Image"
            />
          </div>
          <div className={styles.whatsapp}>
            <Image
              fill
              sizes={IMAGE_SIZES}
              src="/whatsapp.png"
              alt="Whatsapp Image"
            />
          </div>
        </div>
        <div className={styles.astronaut}>
          <Image
            fill
            sizes={IMAGE_SIZES}
            src="/astronaut.png"
            alt="Astronaut Image"
          />
        </div>
        <div className={styles.rocket}>
          <Image
            fill
            sizes={IMAGE_SIZES}
            src="/rocket.png"
            alt="Rocket Image"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ContactSection;
