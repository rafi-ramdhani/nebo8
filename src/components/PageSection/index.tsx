import { BackgroundImage } from "..";
import styles from "./styles.module.css";

type PageSectionProps = {
  section: "home" | "service" | "showreels" | "contact" | "client" | "footer";
  children?: React.ReactNode;
};

const PageSection = ({ section, children }: PageSectionProps) => {
  return (
    <section id={`${section}`} className={styles.pageSection}>
      <div className={`${styles.backgroundContainer} ${styles[section]}`}>
        <BackgroundImage type={section} />
        {children}
      </div>
    </section>
  );
};

export default PageSection;
