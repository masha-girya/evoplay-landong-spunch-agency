import React from "react";
import { AboutUs } from "@components/about-us";
import { Banner } from "@components/banner";
import { Header } from "@components/header";
import { Services } from "@components/services";
import { Solutions } from "@components/solutions";
import { ContactUs } from "@components/contact-us";
import { Footer } from "@components/footer";
import styles from "./index.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header/>
      <main>
        <Banner/>
        <Services/>
        <Solutions/>
        <AboutUs/>
        <ContactUs/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
