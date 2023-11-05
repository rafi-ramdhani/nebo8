import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import NeboLogo from "../components/NeboLogo";

const HeaderNavigation = () => {
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
            <Image
              width={30}
              height={40}
              src="/nav-button.svg"
              alt="Navigation Button"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavigation;
