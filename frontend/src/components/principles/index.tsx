import { PRINCIPLES } from "src/constants";
import styles from "./index.module.scss";

export const Principles = () => {
  return (
    <div className={styles.principles}>
      {PRINCIPLES.map((item) => (
        <p key={item} className={styles.principles__item}>
          {item}
        </p>
      ))}
    </div>
  );
};
