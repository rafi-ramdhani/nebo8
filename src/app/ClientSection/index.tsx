import styles from "./styles.module.css";
import { ImageOptimized, PageSection } from "@/components";

const ClientSection = () => {
  const clients = [
    "bi",
    "danamon",
    "airasia",
    "bluebird",
    "bni",
    "commonwealth",
    "intiland",
    "lmen",
    "bpjs",
    "mandiri",
    "nutrisari",
    "prenagen",
    "puma",
    "godrej",
    "lavon",
    "orangtua",
    "hilo",
    "tut",
    "bakti",
    "ef",
    "btpn",
    "sekar",
    "telkomsel",
    "tropicana",
  ];

  return (
    <PageSection section="client" style={{ marginTop: "-5rem" }}>
      <div className={styles.clientContent}>
        <h2 className={styles.ourClientText}>our client</h2>
        <div className={styles.clientsContainer}>
          {clients.map((client) => {
            const isBI = client === "bi";
            const className = isBI ? styles.biLogo : styles.brandLogo;

            return (
              <div key={client} className={className}>
                <ImageOptimized src={`/${client}.png`} alt={client} />
              </div>
            );
          })}
        </div>

        <h4 className={styles.moreText}>And many more</h4>

        <div className={styles.astronaut}>
          <ImageOptimized src="/astronaut2.png" alt="Astronaut Image" />
        </div>
        <div className={styles.spaceship}>
          <ImageOptimized src="/spaceship.png" alt="Spaceship Image" />
        </div>
      </div>
    </PageSection>
  );
};

export default ClientSection;
