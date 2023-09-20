import { useState } from "react";
import classNames from "classnames";
import { useDevice } from "src/hooks/useDevice";
import { ABOUT_US, NAV } from "src/constants";
import styles from "./index.module.scss";

interface IAboutUsCard {
  card: typeof ABOUT_US[0];
  isMain: boolean;
}

export const AboutUsCard: React.FC<IAboutUsCard> = (props) => {
  const { card, isMain } = props;
  const { title, text } = card;

  return (
    <section
      key={title}
      className={classNames(styles.aboutUsCard, {
        [styles.aboutUs__list__item_main]: isMain,
      })}
    >
      <div className={styles.aboutUsCard__circleBox}>
        <div className={styles.aboutUsCard__circleBox__circle}></div>
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
};
