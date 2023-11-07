import Image from "next/image";
import { PageSection } from "../components";
import styles from "./styles.module.css";

const ContactSection = () => {
  return (
    <PageSection section="contact">
      <div className={styles.contactContent}>
        <Image
          className={styles.when}
          width={1418}
          height={483}
          src="/when.png"
          alt="When Image"
        />
        <div className={styles.whatsappContainer}>
          <Image
            className={styles.brief}
            width={330}
            height={265}
            src="/brief.png"
            alt="Brief Image"
          />
          <Image
            className={styles.whatsapp}
            width={148}
            height={148}
            src="/whatsapp.png"
            alt="Whatsapp Image"
          />
        </div>
        <Image
          className={styles.astronaut}
          width={1031}
          height={846}
          src="/astronaut.png"
          alt="Astronaut Image"
        />
        <Image
          className={styles.rocket}
          width={1131}
          height={1237}
          src="/rocket.png"
          alt="Rocket Image"
        />
      </div>
    </PageSection>
  );
};

export default ContactSection;
