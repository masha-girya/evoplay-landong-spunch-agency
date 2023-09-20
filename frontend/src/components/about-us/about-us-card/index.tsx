import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useDevice } from "src/hooks/useDevice";
import { ABOUT_US, NAV } from "src/constants";
import styles from "./index.module.scss";

interface IAboutUsCard {
  card: typeof ABOUT_US[0];
  index: number;
  mainItemIndex: number;
  setMainItemIndex: (mainItemIndex: number) => void;
}

export const AboutUsCard: React.FC<IAboutUsCard> = (props) => {
  const { card, index, mainItemIndex, setMainItemIndex } = props;
  const { title, text } = card;
  const ref = useRef<any | null>(null);

  const isElementInViewport = (element: any) => {
    const rect = element.getBoundingClientRect();

    // Check if the element is fully visible
    if(index === 1) {
      console.log( {bot: rect.bottom, winH: window.innerHeight})
    }

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };


  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {

        if(isElementInViewport(ref.current)) {
          setMainItemIndex(index);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={classNames(styles.aboutUsCard, {
        [styles.aboutUsCard_main]: mainItemIndex === index,
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
