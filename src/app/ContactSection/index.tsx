import Image from "next/image";
import { PageSection } from "../components";
import styles from "./styles.module.css";

const ContactSection = () => {
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <PageSection section="contact">
      <div className={styles.contactContent}>
        <div className={styles.when}>
          <Image fill sizes={imageSizes} src="/when.png" alt="When Image" />
        </div>
        <div className={styles.whatsappContainer}>
          <div className={styles.brief}>
            <Image fill sizes={imageSizes} src="/brief.png" alt="Brief Image" />
          </div>
          <div className={styles.whatsapp}>
            <Image
              fill
              sizes={imageSizes}
              src="/whatsapp.png"
              alt="Whatsapp Image"
            />
          </div>
        </div>
        <div className={styles.astronaut}>
          <Image
            fill
            sizes={imageSizes}
            src="/astronaut.png"
            alt="Astronaut Image"
          />
        </div>
        <div className={styles.rocket}>
          <Image fill sizes={imageSizes} src="/rocket.png" alt="Rocket Image" />
        </div>
      </div>
    </PageSection>
  );
};

export default ContactSection;
