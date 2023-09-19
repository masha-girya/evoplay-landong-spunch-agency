import styles from "./index.module.scss";
import AIImg from "./assets/AI.png";
import { NAV, SOLUTIONS } from "src/constants";
import { Button } from "@components/button";
import classNames from "classnames";

export const Solutions = () => {
  return (
    <article className={styles.solutions} id={NAV[0].link.replace("#", "")}>
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

          <img src={AIImg.src} alt="AI banner" />
        </section>
        <div className={styles.solutions__list}>
          {SOLUTIONS.map((item, i) => (
            <section key={i} className={styles.solutions__list__section}>
              <div className={classNames(styles.solutions__list__section__textBox, {
                [styles.solutions__list__section__textBox_even]: i % 2 !== 0
              })}>
                <h1>{item.letter}</h1>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <a href={item.link}>
                  <Button name="Read more" onClick={() => {}} />
                </a>
              </div>
              <img src={item.image.src} alt={item.title} />
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};
