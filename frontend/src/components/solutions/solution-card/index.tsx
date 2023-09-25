import classNames from "classnames";
import { Button } from "@components/button";
import { SOLUTIONS } from "src/constants";
import styles from "./index.module.scss";

interface ISolutionCard {
  card: (typeof SOLUTIONS)[0];
  isEven: boolean;
}

export const SolutionCard: React.FC<ISolutionCard> = (props) => {
  const { card, isEven } = props;
  const { letter, title, text, link, image } = card;

  return (
    <section className={styles.solutionCard}>
      <div
        className={classNames(styles.solutionCard__textBox, {
          [styles.solutionCard__textBox_even]: isEven,
        })}
      >
        <h1>{letter}</h1>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={link}>
          <Button name="Read more" onClick={() => {}} />
        </a>
      </div>
      <div className={styles.solutionCard__image}>
        <img src={image.src} alt={title} />
      </div>
    </section>
  );
};
