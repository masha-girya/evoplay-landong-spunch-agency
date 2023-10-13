import classNames from "classnames";
import styles from "./index.module.scss";
import { NAV } from "src/constants";
import { useRouter } from "next/router";

interface INav {
  isFooter?: boolean;
  isMobMenu?: boolean;
  closeMenu?: () => void
}

export const Nav: React.FC<INav> = (props) => {
  const { isMobMenu, isFooter, closeMenu } = props;
  const router = useRouter();

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.nav_mobMenu]: isMobMenu,
        [styles.nav_footer]: isFooter,
      })}
    >
      <ul
        className={classNames(styles.navList, {
          [styles.navList_mobMenu]: isMobMenu,
          [styles.navList_footer]: isFooter,
        })}
      >
        {NAV.map((item) => (
          <li
            key={item.name}
            className={classNames(styles.navList__item, {
              [styles.navList__item_mobMenu]: isMobMenu,
            })}
            onClick={closeMenu}
          >
            <a href={`#${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
