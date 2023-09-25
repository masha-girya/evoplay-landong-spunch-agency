import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { useDevice } from "src/hooks/useDevice";
import { ABOUT_US } from "src/constants";
import styles from "./index.module.scss";

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
  const refCircle = useRef<any | null>(null);
  const { isMobile, isTablet, isDesktop, isSmallNote } = useDevice();

  const isElementInViewport = useCallback((element: any) => {
    const rect = element.getBoundingClientRect();
    const clientHeight = window.innerHeight;

    return rect.top < clientHeight / 2 && rect.bottom > clientHeight / 2;
  }, []);

  const getRefPosition = useCallback(
    (ref: any) => {
      const refHeight = ref.current.getBoundingClientRect().height;
      const gap = isMobile || isTablet ? 120 : 180;
      const padding = isDesktop ? 83 : 60;

      const renderPixels = () => {
        const isWebkit = /(safari|chrome)/.test(navigator.userAgent.toLowerCase());
        if(!isWebkit) {
          switch(window.innerWidth) {
            case 1599:
            case 1600:
            case 1900:
            case 1901:
            case 1959:
            case 1960:
            case 1961:
              return 4;
            default:
              return 3;
          }
        }
        return 3;
      };

      const first = padding + 55 + renderPixels();
      const firstMob = padding + 13;

      return { refHeight, gap, first, firstMob };
    },
    [isMobile, isTablet, isSmallNote, isDesktop]
  );

  const changeTopPosition = useCallback(
    (index) => {
      if (ref.current && refCircle.current) {
        const { refHeight, first, firstMob, gap } = getRefPosition(ref);

        const breakpoint1 = (isMobile || isTablet) ? firstMob : first;
        const breakpoint2 = refHeight + breakpoint1 + gap;
        const breakpoint3 = refHeight + breakpoint2 + gap;

        switch (index) {
          case -1:
          case 0:
            setTop(breakpoint1);
            break;
          case 1:
            setTop(breakpoint2);
            break;
          case 2:
          case 100:
            setTop(breakpoint3);
            break;
          default:
            setTop((prev: number) => prev);
        }
      }
    },
    [isMobile, isTablet, isDesktop, ref]
  );

  const goToSection = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setMainItemIndex(index);
      changeTopPosition(index);
    }
  }, [ref, index, isMobile, isTablet, isDesktop]);

  useEffect(() => {
    if (ref.current) {
      const { first, firstMob } = getRefPosition(ref);

      setTop(isMobile || isTablet ? firstMob : first);
    }
  }, [ref, isMobile, isTablet, isSmallNote, isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (isElementInViewport(ref.current)) {
          setMainItemIndex(index);
          changeTopPosition(index);
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
      <div className={styles.container__circleBox} ref={refCircle}>
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
