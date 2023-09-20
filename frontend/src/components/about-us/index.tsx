import { useState } from "react";
import { useDevice } from "src/hooks/useDevice";
import { AboutUsCard } from "./about-us-card";
import { ABOUT_US, NAV } from "src/constants";
import styles from "./index.module.scss";
import Image from "./assets/Handshake.png";
import ImageMob from "./assets/HandshakeMob.png";

export const AboutUs = () => {
  const [mainItemIndex, setMainItemIndex] = useState(0);
  const { isMobile } = useDevice();

  return (
    <article
      className={styles.aboutUs}
      id={isMobile ? "" : NAV[1].link.replace("#", "")}
    >
      {isMobile && (
        <span
          id={NAV[1].link.replace("#", "")}
          className={styles.anchor}
        ></span>
      )}
      <div className={styles.elements__circleShadow}></div>
      <div className={styles.elements__circleShadowBottom}></div>
      <div className={styles.elements__circleShadowBottom2}></div>
      <div className={styles.aboutUs__container}>
        <section className={styles.aboutUs__head}>
          <img
            loading="lazy"
            src={Image.src}
            srcSet={`${ImageMob.src} 600w, ${Image.src} 1000w`}
            alt="Robot and human handshake"
          />
          <h1>About Us</h1>
        </section>
        <div className={styles.aboutUs__list}>
          <div className={styles.aboutUs__list__circle}></div>
          {ABOUT_US.map((item, i) => (
            <AboutUsCard key={i} card={item} isMain={i === mainItemIndex} />
          ))}
        </div>
      </div>
    </article>
  );
};
