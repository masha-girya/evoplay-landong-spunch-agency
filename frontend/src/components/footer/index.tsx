import { Nav } from "@components/nav";
import styles from "./index.module.scss";
import Logo from "src/assets/images/Logo.png";
import { RightsIcon } from "@components/icons/RightsIcon";
import { SOCIALS } from "src/constants/socials";
import { useCallback } from "react";

export const Footer = () => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.elements__circleShadowBottom}></div>
      <div className={styles.elements__circleShadowBottom2}></div>
      <div className={styles.footer__container}>
        <img src={Logo.src} loading="lazy" onClick={handleScrollTop} />
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
