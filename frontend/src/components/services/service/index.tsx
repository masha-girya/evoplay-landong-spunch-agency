import { useMemo, useRef } from "react";
import { Transition } from "react-transition-group";
import { SERVICES } from "src/constants";
import styles from "./index.module.scss";

interface IService {
  currService: (typeof SERVICES)[0];
  isOnChange: boolean;
}

export const Service: React.FC<IService> = (props) => {
  const { currService, isOnChange } = props;
  const { image, imageText, imageTitle, tabTitle } = currService;
  const transRef = useRef<any | null>(null);

  const duration = useMemo(() => {
    return 300;
  }, []);

  const defaultStyles = {
    opacity: 0,
    transition: `opacity ${duration}s ease-in`,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  return (
    <section className={styles.service}>
      <Transition
        in={!isOnChange}
        nodeRef={transRef}
        timeout={duration}
        unmountOnExit
      >
        {(state) => (
          <div
            className={styles.service__box}
            style={{ ...defaultStyles, ...transitionStyles[state] }}
          >
            <img
              src={image.src}
              alt={tabTitle}
              loading="lazy"
            />
            <div className={styles.service__box__text}>
              <h1>{imageTitle}</h1>
              <p>{imageText}</p>
            </div>
          </div>
        )}
      </Transition>
    </section>
  );
};
