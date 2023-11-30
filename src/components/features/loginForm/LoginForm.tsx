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
import { CountDownType } from "@/src/interfaces/common.interface";
import Countdown from "../common/otpCountdown/CountDown";

const LoginForm = ({
  isOtpVerification = false,
}: {
  isOtpVerification?: boolean;
}) => {
  const history = useHistory();
  const [phoneNumber, setPhoneNumber] = useState(5555555555);
  const [countryCode, setCountryCode] = useState("");
  const [countDownStatus, setCountDownStatus] =
    useState<CountDownType>("start");

  const handleResend = () => {
    setCountDownStatus("start");
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
        <IonToolbar mode="ios">
          <IonButtons slot="start">
            <IonBackButton color={"dark"}></IonBackButton>
          </IonButtons>
          <IonTitle className={`${styles['ion-title']} ion-text-center`}>
            <h2 className={styles.greeting}>Login</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={styles.container}>
          <h2 className={styles.greeting}>Welcome Back</h2>
          <p className={styles["dimmed-text"]}>
            Don’t have an account?&nbsp;
            <Link href={"/"} className={styles["highlighted-text"]}>
              Get Started
            </Link>
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
              <p
                className={`${styles["dimmed-text"]} ${styles["no-margin-bottom"]}`}
              >
                {countDownStatus == "finished" ? (
                  <p>
                    Didnt get a code ?
                    <span
                      onClick={handleResend}
                      className={styles["highlighted-text"]}
                    >
                      &nbsp;Resend
                    </span>
                  </p>
                ) : (
                  <>
                    <span>Resend Verification Code in &nbsp;</span>
                    <span className={styles["highlighted-text"]}>
                      <Countdown
                        status={countDownStatus}
                        setStatus={setCountDownStatus}
                      />
                    </span>
                  </>
                )}
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
