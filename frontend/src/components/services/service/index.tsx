import { useMemo, useRef } from "react";
import { Transition } from "react-transition-group";
import { SERVICES } from "src/constants";
import styles from "./index.module.scss";

interface IService {
  currService: (typeof SERVICES)[0] | null;
}

export const Service: React.FC<IService> = (props) => {
  const { currService } = props;
  const transRef = useRef<any | null>(null);

  const duration = useMemo(() => {
    return 200;
  }, []);

  const defaultStyles = {
    opacity: 0,
    transition: `opacity ${duration}ms ease-in`,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className={styles.serviceContainer}>
      <Transition in={currService !== null} nodeRef={transRef} timeout={duration}>
        {(state) => (
          <section
            style={{ ...defaultStyles, ...transitionStyles[state] }}
            ref={transRef}
            className={styles.service}
          >
            <div className={styles.service__box}>
              {currService && (
                <img
                  src={currService.image.src}
                  alt={currService.tabTitle}
                  loading="lazy"
                />
              )}
              <div className={styles.service__box__text}>
                <h1>{currService?.imageTitle}</h1>
                <p>{currService?.imageText}</p>
              </div>
            </div>
          </section>
        )}
      </Transition>
    </div>
  );
};
