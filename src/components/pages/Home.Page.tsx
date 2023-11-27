import React from "react";
import Header from "../features/common/header/Header";
import Banner from "../features/common/banner/Banner";
import CorporateService from "../features/common/corporateService/CorporateService";
import Accordions from "../features/common/accordion/Accordion";
import Footer from "../features/common/footer/Footer";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";

const HomePage = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color={"dark"}></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Header />
          <Banner />
          <CorporateService />
          <Accordions />
          <Footer />
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomePage;
