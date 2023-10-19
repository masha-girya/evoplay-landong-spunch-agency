import { CloseIcon } from "@components/icons/CloseIcon";
import styles from "./index.module.scss";
import Logo from "src/assets/images/Logo.png";
import { Button } from "@components/button";
import { useEffect, useState } from "react";
import { Input } from "@components/input";
import { REQ_STATUS } from "src/services/api-types";
import { emailValidation } from "src/services/validation";
import { sendRequest } from "src/services/api";
import { RequestStatus } from "@components/request-status";

interface IContactUsModal {
  setIsOpen: (isOpen: boolean) => void;
}

export const ContactUsModal: React.FC<IContactUsModal> = (props) => {
  const { setIsOpen } = props;
  const [type, setType] = useState<"Service" | "Vacancy">("Service");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<REQ_STATUS>(REQ_STATUS.none);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (
    event: any,
    nameData: string,
    emailData: string,
    typeData = "Service"
  ) => {
    event.preventDefault();

    const isValidName = nameData.trim().length > 0;
    const isValidEmail = emailValidation(emailData);

    if (!isValidName || !isValidEmail) {
      console.log({isValidEmail, isValidName})
      setStatus(REQ_STATUS.lackData);
    }

    if (isValidName && isValidEmail) {
      setIsLoading(true);

      const reqData = {
        type: typeData,
        name: nameData,
        email: emailData,
      };

      const status = await sendRequest(reqData);
      setStatus(status.status);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (name.trim().length > 0) {
      setStatus(REQ_STATUS.none);
    }
  }, [name]);

  useEffect(() => {
    if (emailValidation(email)) {
      setStatus(REQ_STATUS.none);
    }
  }, [email]);

  useEffect(() => {
    if (status === REQ_STATUS.success) {
      setName("");
      setEmail("");
    }
  }, [status]);

  useEffect(() => {
    console.log(status);
  }, [status])

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
        <h1 className={styles.contactModal__main__title}>Lorem ipsum</h1>
        <p className={styles.contactModal__main__subtitle}>Lorem ipsum</p>
        <form
          className={styles.contactModal__main__form}
          onSubmit={(event) => handleSubmit(event, name, email, type)}
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
            <Input placeholder="Name*" value={name} onChange={setName} errorText={errors.name} />
            <Input placeholder="Email*" value={email} onChange={setEmail} errorText={errors.email} />
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
