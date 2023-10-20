import { useRequest } from "src/hooks/useRequest";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { RequestStatus } from "@components/request-status";
import styles from "./index.module.scss";

export const ContactUs = () => {
  const {
    name,
    email,
    status,
    isLoading,
    setName,
    setEmail,
    setStatus,
    handleSubmit,
  } = useRequest();

  return (
    <div className={styles.contactUs}>
      <div className={styles.elements__circle}></div>
      <div className={styles.contactUs__container}>
        <h1 className={styles.contactUs__title}>Contact Us</h1>
        <form className={styles.contactUs__form} onSubmit={handleSubmit}>
          <Input placeholder="Name" value={name} onChange={setName} />
          <Input
            placeholder="Email Address*"
            value={email}
            onChange={setEmail}
          />
          <RequestStatus status={status} setStatus={setStatus} />
          <div className={styles.contactUs__form__button}>
            <Button
              disabled={isLoading}
              type="submit"
              name="Contact Us"
              onClick={() => {}}
              variant="middle"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
