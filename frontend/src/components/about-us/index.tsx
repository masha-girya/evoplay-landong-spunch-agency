import { useState } from "react";
import classNames from "classnames";
import { ABOUT_US, NAV } from "src/constants";
import styles from "./index.module.scss";
import Image from "./assets/Handshake.png";

export const AboutUs = () => {
  const [mainItemIndex, setMainItemIndex] = useState(0);

  return (
    <article className={styles.aboutUs} id={NAV[1].link.replace("#", "")}>
      <div className={styles.aboutUs__container}>
        <section className={styles.aboutUs__head}>
          <img src={Image.src} alt="Robot and human handshake" />
          <h1>About Us</h1>
        </section>
        <div className={styles.aboutUs__list}>
          <div className={styles.aboutUs__list__circle}></div>
          {ABOUT_US.map((item, i) => (
            <section
              key={item.title}
              className={classNames(styles.aboutUs__list__item, {
                [styles.aboutUs__list__item_main]: mainItemIndex === i
              })}
            >
              <div className={styles.aboutUs__list__item__circleBox}>
                <div
                  className={styles.aboutUs__list__item__circleBox__circle}
                ></div>
              </div>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};
