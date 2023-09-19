import Logo from "src/assets/images/Logo.png";
import styles from "./index.module.scss";
import { Nav } from "@components/nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__logo} src={Logo.src} alt="EVO Logo" />
        <Nav/>
      </div>
    </header>
  );
};
