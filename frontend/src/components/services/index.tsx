import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { Button } from "@components/button";
import { SERVICES, SERVICES_TEXT } from "src/constants";
import styles from "./index.module.scss";
import RobotImg from "./assets/Robot.png";
import classNames from "classnames";
import { Service } from "./service";
import { useDevice } from "src/hooks/useDevice";

export const Services = () => {
  const [currService, setCurrService] = useState(SERVICES[0]);
  const [isOnChange, setIsOnChange] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any | null>(null);
  const { isMobile } = useDevice();

  const handleChoose = useCallback((item: (typeof SERVICES)[0]) => {
    setIsOnChange(true);
    setCurrService(item);
    setTimeout(() => setIsOnChange(false), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if(window.scrollY >= (isMobile ? 900 : 1000)) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, isMobile]);

  return (
    <article className={styles.services}>
      <div className={styles.services__container}>
        <ul className={styles.services__tabList}>
          {SERVICES.map((item) => (
            <li key={item.tabTitle}>
              <Button
                name={item.tabTitle}
                variant="textMain"
                isActive={currService.tabTitle === item.tabTitle}
                onClick={() => handleChoose(item)}
              />
            </li>
          ))}
        </ul>
        <Service currService={currService} isOnChange={isOnChange} />
        <section className={styles.services__generalContent}>
          <h1
            className={classNames(
              styles.services__generalContent__title,
              styles.services__generalContent__title_mob
            )}
          >
            Lorem ipsum dolor sit
          </h1>
          <div className={styles.services__generalContent__text} ref={ref}>
            <h1 className={styles.services__generalContent__title}>
              Lorem ipsum dolor sit
            </h1>
            <div className={styles.services__generalContent__text__pBox}>
              {SERVICES_TEXT.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.services__generalContent__imgBox}>
            {isVisible && <img src={RobotImg.src} alt="Robot image" />}
          </div>
        </section>
      </div>
      <div className={styles.elements__circle}></div>
      <div className={styles.elements__circle2}></div>
    </article>
  );
};
