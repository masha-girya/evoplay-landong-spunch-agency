import { useCallback, useState } from "react";
import { Input } from "@components/input";
import styles from "./index.module.scss";
import { Button } from "@components/button";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    //some code
  }

  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUs__container}>
        <h1 className={styles.contactUs__title}>Contact Us</h1>
        <form className={styles.contactUs__form}>
          <Input placeholder="Name" value={name} onChange={setName} />
          <Input placeholder="Email Address*" value={email} onChange={setEmail} />
          <div className={styles.contactUs__form__button}>
            <Button name="Contact Us" onClick={handleSubmit} variant="middle" />
          </div>
        </form>
      </div>
    </div>
  );
};
