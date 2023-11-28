import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import PhoneNumberInput from "../phoneNumberInput/MobileInput";

const LoginForm = ({
  isOtpVerification = false,
}: {
  isOtpVerification?: boolean;
}) => {
  const history = useHistory();
  const [countdown, setCountdown] = useState(24);
  const [phoneNumber, setPhoneNumber] = useState(5555555555);
  const [countryCode, setCountryCode] = useState("");
  const [resend, setResend] = useState(false);

  useEffect(() => {    
    let intervalId: any;
    if (countdown > 0 && resend) {
      intervalId = setInterval(() => {
        setCountdown((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setResend(false);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown,resend]);
  const handleResend = () => {
    if (countdown == 0) {
      setCountdown(24);
      setResend(true);
    }
    setCountdown(24);
    setResend(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isOtpVerification) {
      history.push("/login/verify");
    } else {
      history.push("/home");
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color={"dark"}></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">
            {" "}
            <h2 className={styles.greeting}>Welcome Back</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={styles.container}>
          <p className={styles["dimmed-text"]}>
            Don’t have an account?&nbsp;
            <span className={styles["highlighted-text"]}>Get Started</span>
          </p>
          <h6 className={styles["input-label"]}>Mobile Number</h6>
          {/* <div className={styles["input-box"]}>
            <div className={styles["input-box__country-select"]}>+971</div>
            <input type="text" defaultValue={"55 555 55555"} />
          </div> */}
          <PhoneNumberInput
            disable={isOtpVerification}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />
          {isOtpVerification && (
            <>
              <h6 className={styles["input-label"]}>Verification Code</h6>
              <div className={styles["input-box"]}>
                <input
                  type="text"
                  className={styles["otp-input"]}
                  defaultValue={"123456"}
                />
              </div>
              <p onClick={handleResend}
                className={`${styles["dimmed-text"]} ${styles["no-margin-bottom"]}`}
              >
                Resend Verification Code in&nbsp;
                <span className={styles["highlighted-text"]}>00:{countdown}</span>
              </p>
            </>
          )}
          <div className={styles["submit-btn__container"]}>
            <button onClick={handleSubmit} className={styles["submit-btn"]}>
              {isOtpVerification ? "Login" : "Request Verification Code"}
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginForm;
