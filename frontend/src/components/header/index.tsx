import Logo from "src/assets/images/Logo.png";
import styles from "./index.module.scss";
import { Nav } from "@components/nav";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { SOCIALS } from "src/constants/socials";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.getElementsByTagName("html")[0].style.overflow = "visible";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.getElementsByTagName("html")[0].style.overflow = "visible";
    };
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles.header_open]: menuOpen,
      })}
    >
      <div className={styles.header__container}>
        <a href="/" className={styles.header__logo}>
          <img src={Logo.src} alt="EVO Logo" />
        </a>
        <div className={styles.burger}>
          <input onClick={handleMobileMenu} type="checkbox" />
          <span></span>
        </div>
        <Nav />
      </div>
      <div
        className={classNames(styles.mobMenu, {
          [styles.mobMenu_open]: menuOpen,
        })}
      >
        <div className={styles.mobMenu__nav}>
          <Nav isMobMenu closeMenu={handleMobileMenu} />
        </div>
        <div className={styles.mobMenu__socials}>
            {SOCIALS.map((item) => (
              <a key={item.title} href={item.link} title={item.title}>
                {item.Icon}
              </a>
            ))}
        </div>
      </div>
    </header>
  );
};
