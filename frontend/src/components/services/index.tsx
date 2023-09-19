import { useCallback, useMemo, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { Button } from "@components/button";
import { SERVICES, SERVICES_TEXT } from "src/constants";
import styles from "./index.module.scss";
import RobotImg from "./assets/Robot.png";

export const Services = () => {
  const [currService, setCurrService] = useState(SERVICES[0]);
  const [isOnChange, setIsOnChange] = useState(false);
  const transRef = useRef<any | null>(null);

  const duration = useMemo(() => {
    return 300;
  }, []);

  const defaultStyles = {
    opacity: 0,
    transition: `opacity ${duration}s ease-in`
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  const handleChoose = useCallback((item: (typeof SERVICES)[0]) => {
    setIsOnChange(true);
    setCurrService(item);
    setTimeout(() => setIsOnChange(false), 100);
  }, []);

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
        <section className={styles.services__service}>
          <Transition
            in={!isOnChange}
            nodeRef={transRef}
            timeout={duration}
            unmountOnExit
          >
            {(state) => (
              <div
                className={styles.services__service__box}
                style={{ ...defaultStyles, ...transitionStyles[state] }}
              >
                <img src={currService.image.src} alt={currService.tabTitle} />
                <div className={styles.services__service__box__text}>
                  <h1>{currService.imageTitle}</h1>
                  <p>{currService.imageText}</p>
                </div>
              </div>
            )}
          </Transition>
        </section>
        <section className={styles.services__generalContent}>
          <div className={styles.services__generalContent__text}>
            <h1>Lorem ipsum dolor sit</h1>
            <div className={styles.services__generalContent__text__pBox}>
              {SERVICES_TEXT.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
          <img src={RobotImg.src} alt="Robot image" />
        </section>
      </div>
    </article>
  );
};
