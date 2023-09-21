import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { ABOUT_US } from "src/constants";
import styles from "./index.module.scss";
import { useDevice } from "src/hooks/useDevice";

interface IAboutUsCard {
  card: (typeof ABOUT_US)[0];
  index: number;
  mainItemIndex: number;
  setMainItemIndex: (mainItemIndex: number) => void;
  setTop: React.Dispatch<React.SetStateAction<number>>;
}

export const AboutUsCard: React.FC<IAboutUsCard> = (props) => {
  const { card, index, mainItemIndex, setMainItemIndex, setTop } = props;
  const { title, text } = card;
  const ref = useRef<any | null>(null);
  const { isMobile, isTablet, isDesktop, isSmallNote } = useDevice();

  const isElementInViewport = useCallback((element: any) => {
    const rect = element.getBoundingClientRect();
    const clientHeight = window.innerHeight;

    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;
  }, []);

  const changeTopPosition = useCallback((index) => {
    if(ref.current) {
      const refHeight = ref.current.getBoundingClientRect().height;
      const gap = (isMobile || isTablet) ? 120 : 180;
      const padding = isDesktop ? 80 : 60;
      const diag = () => {
        if(isSmallNote) return 4;
        if(isDesktop) return 1;
        return 5;
      };

      const first = Math.round(refHeight / 2) + padding - diag();
      const firstMob = padding + 13;

      const breakpoint1 = (isMobile || isTablet) ? firstMob : first;
      const breakpoint2 = Math.round(refHeight + breakpoint1 + gap);
      const breakpoint3 = Math.round(refHeight + breakpoint2 + gap);
  
      switch(index) {
        case 0:
          setTop(breakpoint1);
          break;
        case 1:
          setTop(breakpoint2);
          break;
        case 2:
          setTop(breakpoint3);
          break;
        default:
          setTop((prev: number) => prev);
      }
    }

  }, [isMobile, isTablet, isDesktop, ref]);

  const goToSection = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setMainItemIndex(index);
      changeTopPosition(index)
    }
  }, [ref, index, isMobile, isTablet, isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (isElementInViewport(ref.current)) {
          setMainItemIndex(index);
          changeTopPosition(index)
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index, isMobile, isTablet, isDesktop]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.container__circleBox}>
        <div className={styles.container__circleBox__circle}></div>
      </div>
      <section
        onClick={goToSection}
        className={classNames(styles.aboutUsCard, {
          [styles.aboutUsCard_main]: mainItemIndex === index,
        })}
      >
        <h1>{title}</h1>
        <p>{text}</p>
      </section>
    </div>
  );
};
