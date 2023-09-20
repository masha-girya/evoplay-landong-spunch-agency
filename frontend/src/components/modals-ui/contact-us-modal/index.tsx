import { CloseIcon } from "@components/icons/CloseIcon";
import styles from "./index.module.scss";
import Logo from "src/assets/images/Logo.png";
import { Button } from "@components/button";
import { useState } from "react";
import { Input } from "@components/input";

interface IContactUsModal {
  setIsOpen: (isOpen: boolean) => void;
}

export const ContactUsModal: React.FC<IContactUsModal> = (props) => {
  const { setIsOpen } = props;
  const [type, setType] = useState<"Service" | "Vacancy">("Service");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    //some logic
  };

  return (
    <div className={styles.contactModal}>
      <div className={styles.contactModal__header}>
        <a href="/">
          <img src={Logo.src} alt="Logo" loading="lazy" />
        </a>
        <button
          className={styles.contactModal__header__closeIcon}
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles.contactModal__main}>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum</p>
        <form className={styles.contactModal__main__form}>
          <div className={styles.contactModal__main__form__types}>
            <Button
              name="Service"
              variant="secondary"
              onClick={() => setType("Service")}
              isActive={type === "Service"}
            />
            <Button
              name="Vacancy"
              variant="secondary"
              onClick={() => setType("Vacancy")}
              isActive={type === "Vacancy"}
            />
          </div>
          <div className={styles.contactModal__main__form__inputs}>
            <Input placeholder="Name" value={name} onChange={setName} />
            <Input placeholder="Email" value={email} onChange={setEmail} />
          </div>
          <div className={styles.contactModal__main__form__btn}>
            <Button name="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};
