import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import NeboLogo from "../components/NeboLogo";

const HeaderNavigation = () => {
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <header className={styles.headerNavigation}>
      <div>
        <NeboLogo />

        <nav>
          <ul>
            <li>
              <Link href="#home">home</Link>
            </li>
            <li>
              <Link href="#service">service</Link>
            </li>
            <li>
              <Link href="#showreels">showreels</Link>
            </li>
            <li>
              <Link href="#contact">contact</Link>
            </li>
          </ul>

          <div
            className={styles.navButtonContainer}
            style={{ rotate: "90deg" }}
          >
            <div className={styles.navButton}>
              <Image
                fill
                sizes={imageSizes}
                src="/nav-button.svg"
                alt="Navigation Button"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavigation;
