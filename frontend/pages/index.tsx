import React from "react";
import { AboutUs } from "@components/about-us";
import { Banner } from "@components/banner";
import { Header } from "@components/header";
import { Services } from "@components/services";
import { Solutions } from "@components/solutions";
import { ContactUs } from "@components/contact-us";
import { Footer } from "@components/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <Services/>
        <Solutions/>
        <AboutUs/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
