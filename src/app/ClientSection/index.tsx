import Image from "next/image";
import { PageSection } from "../components";
import styles from "./styles.module.css";

const ClientSection = () => {
  const clients = [
    "bi",
    "mandiri",
    "btpn",
    "toyota",
    "honda",
    "puma",
    "adidas",
    "nb",
    "logitech",
  ];

  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <PageSection section="client">
      <div className={styles.clientContent}>
        <h2 className={styles.ourClientText}>our client</h2>
        <div className={styles.clientsContainer}>
          {clients.map((client) => {
            return (
              <div key={client} className={styles[client]}>
                <Image
                  fill
                  sizes={imageSizes}
                  src={`/${client}.png`}
                  alt={client}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.astronaut}>
          <Image
            fill
            sizes={imageSizes}
            src="/astronaut2.png"
            alt="Astronaut Image"
          />
        </div>
        <div className={styles.spaceship}>
          <Image
            fill
            sizes={imageSizes}
            src="/spaceship.png"
            alt="Spaceship Image"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ClientSection;
