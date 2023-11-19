import { CSSProperties, forwardRef } from "react";
import { BackgroundImage } from "..";
import styles from "./styles.module.css";

type PageSectionProps = {
  section: "home" | "service" | "showreels" | "contact" | "client" | "footer";
  style?: CSSProperties;
  children?: React.ReactNode;
};

const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  ({ section, style, children }, ref) => {
    return (
      <section
        ref={ref}
        id={`${section}`}
        className={styles.pageSection}
        style={style}
      >
        <div className={`${styles.backgroundContainer} ${styles[section]}`}>
          <BackgroundImage type={section} />
          {children}
        </div>
      </section>
    );
  }
);

PageSection.displayName = "PageSection";

export default PageSection;
