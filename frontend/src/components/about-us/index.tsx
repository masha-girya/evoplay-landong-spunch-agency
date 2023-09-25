import { useEffect, useState } from "react";
import { useDevice } from "src/hooks/useDevice";
import { AboutUsCard } from "./about-us-card";
import { ABOUT_US, NAV } from "src/constants";
import styles from "./index.module.scss";
import Image from "./assets/Handshake.png";
import ImageMob from "./assets/HandshakeMob.png";

export const AboutUs = () => {
  const [mainItemIndex, setMainItemIndex] = useState(0);
  const { isMobile, isTablet } = useDevice();
  const [top, setTop] = useState(0);

  return (
    <article className={styles.aboutUs}>
      <span id={NAV[1].link} className={styles.anchor}></span>
      <div className={styles.elements__circleShadow}></div>
      <div className={styles.aboutUs__container}>
        <section className={styles.aboutUs__head}>
          <img
            loading="lazy"
            src={isTablet || isMobile ? ImageMob.src : Image.src}
            alt="Robot and human handshake"
          />
          <h1>About Us</h1>
        </section>
        <div className={styles.aboutUs__list}>
          <div
            className={styles.aboutUs__list__circle}
            style={{ transform: `translateY(${top}px)` }}
          ></div>
          {ABOUT_US.map((item, i) => (
            <AboutUsCard
              key={i}
              card={item}
              index={i}
              mainItemIndex={mainItemIndex}
              setMainItemIndex={setMainItemIndex}
              setTop={setTop}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
