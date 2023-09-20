import styles from "./index.module.scss";
import ShieldImg from "./assets/Shield.png";
import RobotHandImg from "./assets/Robot-hand.png";
import { Button } from "@components/button";
import { Modal } from "@components/modal";
import { useState } from "react";
import { ContactUsModal } from "@components/modals-ui/contact-us-modal";

export const Banner = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.banner}>
      <Modal
        isOpen={isOpenModal}
        isOpenCallback={setIsOpenModal}
        children={<ContactUsModal setIsOpen={setIsOpenModal}/>}
      />
      <div className={styles.elements__circle}></div>
      <div className={styles.elements__circleShadow1}></div>
      <div className={styles.elements__circleShadow2}></div>
      <div className={styles.elements__circleShadow3}></div>
      <div className={styles.banner__text}>
        <h1>Infinite AI Driven Intelligence</h1>
        <img className={styles.banner__shieldImg_mob} src={ShieldImg.src} alt="Shield image" loading="lazy" />
        <img className={styles.banner__robotImg_mob} src={RobotHandImg.src} alt="Robot's hand image" loading="lazy" />
        <p>
          EVO provides infinite AI driven Intelligence for National Security and
          corporate organizations to make threat and opportunity related
          decisions with confidence
        </p>
        <Button name="Get Started" onClick={() => setIsOpenModal(true)} />
      </div>
      <div className={styles.banner__imgBox}>
        <img className={styles.banner__shieldImg} src={ShieldImg.src} alt="Shield image" loading="lazy" />
        <img className={styles.banner__robotImg} src={RobotHandImg.src} alt="Robot's hand image" loading="lazy" />
      </div>
      <div className={styles.elements__circleBottom}></div>
      <div className={styles.elements__circleShadowBottom1}></div>
      <div className={styles.elements__circleShadowBottom2}></div>
      <div className={styles.elements__circleShadowBottom3}></div>
    </div>
  );
};
