import { CloseIcon } from "@components/icons/CloseIcon";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { RequestStatus } from "@components/request-status";
import { useRequest } from "src/hooks/useRequest";
import styles from "./index.module.scss";
import Logo from "src/assets/images/Logo.png";

interface IContactUsModal {
  setIsOpen: (isOpen: boolean) => void;
}

export const ContactUsModal: React.FC<IContactUsModal> = (props) => {
  const { setIsOpen } = props;
  const {
    name,
    email,
    type,
    status,
    isLoading,
    setName,
    setEmail,
    setType,
    setStatus,
    handleSubmit,
  } = useRequest();

  return (
    <div className={styles.contactModal}>
      <div className={styles.contactModal__header}>
        <img src={Logo.src} alt="Logo" loading="lazy" />
        <button
          className={styles.contactModal__header__closeIcon}
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles.contactModal__main}>
        <h1 className={styles.contactModal__main__title}>Leave a request</h1>
        <p className={styles.contactModal__main__subtitle}>We will contact you shortly</p>
        <form
          className={styles.contactModal__main__form}
          onSubmit={handleSubmit}
        >
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
            <Input placeholder="Name*" value={name} onChange={setName} />
            <Input placeholder="Email*" value={email} onChange={setEmail} />
          </div>
          <RequestStatus status={status} setStatus={setStatus} />
          <div className={styles.contactModal__main__form__btn}>
            <Button
              disabled={isLoading}
              type="submit"
              name="Submit"
              onClick={() => {}}
              fullWidthMob
            />
          </div>
        </form>
      </div>
    </div>
  );
};
