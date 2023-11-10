import Image from "next/image";
import styles from "./styles.module.css";
import { PageSection } from "@/components";
import { IMAGE_SIZES } from "@/constants/sizes";

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
                  sizes={IMAGE_SIZES}
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
            sizes={IMAGE_SIZES}
            src="/astronaut2.png"
            alt="Astronaut Image"
          />
        </div>
        <div className={styles.spaceship}>
          <Image
            fill
            sizes={IMAGE_SIZES}
            src="/spaceship.png"
            alt="Spaceship Image"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ClientSection;
