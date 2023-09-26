import { SOCIALS } from "src/constants/socials";
import styles from "./index.module.scss";
import classNames from "classnames";

export const Socials = () => {
  return (
    <div className={styles.socials}>
      {SOCIALS.map((item) => (
        <a
          key={item.title}
          href={item.link}
          title={item.title}
          className={classNames(styles.socials__item, {
            [styles.socials__item_twitter]:
              item.title.includes("Twitter"),
          })}
        >
          {item.Icon}
        </a>
      ))}
    </div>
  );
};
