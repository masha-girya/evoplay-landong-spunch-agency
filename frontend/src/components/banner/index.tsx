import styles from "./index.module.scss";
import ShieldImg from "./assets/Shield.png";
import RobotHandImg from "./assets/Robot-hand.png";
import { Button } from "@components/button";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__text}>
        <h1>Infinite AI Driven Intelligence</h1>
        <p>
          EVO provides infinite AI driven Intelligence for National Security and
          corporate organizations to make threat and opportunity related
          decisions with confidence
        </p>
        <Button name="Get Started" onClick={() => {}} />
      </div>
      <div className={styles.banner__imgBox}>
        <img className={styles.banner__shieldImg} src={ShieldImg.src} alt="Shield image" />
        <img className={styles.banner__robotImg} src={RobotHandImg.src} alt="Robot's hand image" />
      </div>
    </div>
  );
};
