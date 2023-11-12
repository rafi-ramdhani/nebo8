import styles from "./styles.module.css";
import { ImageOptimized, PageSection } from "@/components";

const ClientSection = () => {
  const clients = [
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
    <PageSection section="client">
      <div className={styles.clientContent}>
        <h2 className={styles.ourClientText}>our client</h2>
        <div className={styles.clientsContainer}>
          {clients.map((client) => {
            return (
              <div key={client} className={styles.brandLogo}>
                <ImageOptimized src={`/${client}.png`} alt={client} />
              </div>
            );
          })}
        </div>

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
