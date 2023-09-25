import { SolutionCard } from "./solution-card";
import { NAV, SOLUTIONS } from "src/constants";
import styles from "./index.module.scss";
import AIImg from "./assets/AI.png";

export const Solutions = () => {

  return (
    <article className={styles.solutions}>
      <span id={NAV[0].link} className={styles.anchor}></span>
      <div className={styles.elements__circle}></div>
      <div className={styles.elements__circle2}></div>
      <div className={styles.solutions__container}>
        <section className={styles.solutions__intro}>
          <div className={styles.solutions__intro__textBox}>
            <h1>Let AI redefine Intelligence…</h1>
            <p>
              Our AI solution, Evolution allows you to filter though data rivers
              in record time, to find the highest risks and the best
              opportunities across all data source.
            </p>
          </div>
          <div className={styles.solutions__intro__aiImg}>
            <img src={AIImg.src} alt="AI banner" />
          </div>
        </section>
        <div className={styles.solutions__list}>
          {SOLUTIONS.map((item, i) => (
            <SolutionCard key={i} card={item} isEven={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </article>
  );
};
