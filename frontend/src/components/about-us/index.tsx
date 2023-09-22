import { useEffect, useRef, useState } from "react";
import { useDevice } from "src/hooks/useDevice";
import { AboutUsCard } from "./about-us-card";
import { ABOUT_US, NAV } from "src/constants";
import styles from "./index.module.scss";
import Image from "./assets/Handshake.png";
import ImageMob from "./assets/HandshakeMob.png";

export const AboutUs = () => {
  const [mainItemIndex, setMainItemIndex] = useState(-1);
  const { isMobile } = useDevice();
  const blockRef = useRef<any | null>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if(blockRef.current) {
        const position = blockRef.current.getBoundingClientRect();

        if(position.y > 450 || position.y < -750) {
          setMainItemIndex(-1);
        }
        if(position.y < -750) {
          setMainItemIndex(100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blockRef]);

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
        <div className={styles.aboutUs__list} ref={blockRef}>
          <div className={styles.aboutUs__list__circle} style={{ transform: `translateY(${top}px)` }}></div>
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
