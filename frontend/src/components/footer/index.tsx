import { Nav } from "@components/nav";
import { useDevice } from "src/hooks/useDevice";
import { RightsIcon } from "@components/icons/RightsIcon";
import { SOCIALS } from "src/constants/socials";
import styles from "./index.module.scss";
import Logo from "src/assets/images/Logo.png";
import BackgroundImg from "./assets/Background.png";
import BackgroundMobImg from "./assets/BackgroundMob.png";
import classNames from "classnames";

export const Footer = () => {
  const { isTablet, isMobile } = useDevice();

  return (
    <footer className={styles.footer}>
      <img
        className={styles.shadow__background}
        src={isTablet || isMobile ? BackgroundMobImg.src : BackgroundImg.src}
      />
      <div className={styles.footer__container}>
        <a href="/">
          <img className={styles.footer__logo} src={Logo.src} loading="lazy" />
        </a>
        <Nav isFooter />
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__rights}>
            <RightsIcon />
            <p>2023 EVO. All rights reserved</p>
          </div>
          <div className={styles.footer__bottom__socials}>
            {SOCIALS.map((item) => (
              <a
                key={item.title}
                href={item.link}
                title={item.title}
                className={classNames(styles.footer__bottom__socials__item, {
                  [styles.footer__bottom__socials__item_twitter]: item.title.includes("Twitter")
                })}
              >
                {item.Icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
