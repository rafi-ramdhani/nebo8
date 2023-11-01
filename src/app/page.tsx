import Image from "next/image";
import styles from "./page.module.css";

type BackgroundImageProps = {
  type: "home" | "service" | "showreels" | "contact" | "client" | "footer";
};

const BackgroundImage = ({ type }: BackgroundImageProps) => {
  return (
    <Image
      fill
      priority
      className={styles.backgroundImage}
      src={`/${type}-background.png`}
      alt="Background Image"
    />
  );
};

export default function Home() {
  return (
    <main>
      <section>
        <div className={styles.homeBackgroundContainer}>
          <BackgroundImage type="home" />
        </div>
      </section>

      <section>
        <div className={styles.serviceBackgroundContainer}>
          <BackgroundImage type="service" />
        </div>
      </section>

      <section>
        <div className={styles.serviceBackgroundContainer}>
          <BackgroundImage type="showreels" />
        </div>
      </section>

      <section>
        <div className={styles.serviceBackgroundContainer}>
          <BackgroundImage type="contact" />
        </div>
      </section>

      <section>
        <div className={styles.serviceBackgroundContainer}>
          <BackgroundImage type="client" />
        </div>
      </section>

      <section>
        <div className={styles.serviceBackgroundContainer}>
          <BackgroundImage type="footer" />
        </div>
      </section>
    </main>
  );
}
