import styles from "./index.module.scss";
import { NAV } from "src/constants";

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        {NAV.map((item) => (
          <li key={item.name} className={styles.navList__item}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
