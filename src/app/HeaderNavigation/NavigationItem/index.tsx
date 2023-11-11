import Link from "next/link";
import { Navigation } from "../useHeaderNavigation";
import styles from "./styles.module.css";

type NavigationProps = {
  navigation: Navigation;
  selectedNavigation: Navigation;
  showNavigations: boolean;
  onSelect: (navigation: Navigation) => void;
};

const NavigationItem = ({
  navigation,
  selectedNavigation,
  showNavigations,
  onSelect,
}: NavigationProps) => {
  const isSelected = selectedNavigation === navigation;
  const showHighlight = isSelected && showNavigations;

  const hidingStyle = {
    transition: "all 0.2s ease-in",
    translate: showNavigations ? "0rem" : "40rem 0rem",
  };

  return (
    <li key={navigation} className={styles.navigationItem} style={hidingStyle}>
      <Link
        href={`#${navigation}`}
        className={styles.navigationLink}
        onClick={() => onSelect(navigation)}
      >
        {navigation}
      </Link>

      {showHighlight && <div className={styles.highlight} />}
    </li>
  );
};

export default NavigationItem;
