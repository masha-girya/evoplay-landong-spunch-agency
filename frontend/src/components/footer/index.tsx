import { Nav } from "@components/nav";
import styles from "./index.module.scss";
import Logo from "src/assets/images/Logo.png";
import { RightsIcon } from "@components/icons/RightsIcon";
import { SOCIALS } from "src/constants/socials";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <a href="/">
          <img src={Logo.src} loading="lazy" />
        </a>
        <Nav isFooter />
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__rights}>
            <RightsIcon />
            <p>2023 EVO. All rights reserved</p>
          </div>
          <div className={styles.footer__bottom__socials}>
            {SOCIALS.map((item) => (
              <a key={item.title} href={item.link} title={item.title}>
                {item.Icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
