import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import styles from "./RegisterForm.module.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import PhoneNumberInput from "../phoneNumberInput/MobileInput";

const RegisterForm = ({ isOtpVerification = false }) => {
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

  const handleSubmit = () => {
    if (isOtpVerification) {
      history.push("/login");
    } else {
      setResend(true);
      history.push("/signup/verify");
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
            <h2 className={styles.greeting}>Create an Account</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={styles.container}>
          <p className={styles["dimmed-text"]}>
            Already have an account?&nbsp;
            <span className={styles["highlighted-text"]}>Login</span>
          </p>
          <h6 className={styles["input-label"]}>First Name</h6>
          <div className={styles["input-box"]}>
            <input
              disabled={isOtpVerification ? true : false}
              type="text"
              defaultValue={"Ahmed"}
            />
          </div>
          <h6 className={styles["input-label"]}>Last Name</h6>
          <div className={styles["input-box"]}>
            <input
              disabled={isOtpVerification ? true : false}
              type="text"
              defaultValue={"Nazouri"}
            />
          </div>
          <h6 className={styles["input-label"]}>Email ID</h6>
          <div className={styles["input-box"]}>
            <input
              disabled={isOtpVerification ? true : false}
              type="text"
              defaultValue={"ahmed@email.com"}
            />
          </div>
          <h6 className={styles["input-label"]}>Mobile Number</h6>
          {/* <div className={styles["input-box"]}> */}
            {/* <div className={styles["input-box__country-select"]}> */}
              <PhoneNumberInput
                disable={isOtpVerification}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
            {/* </div> */}
            {/* <input
              disabled={isOtpVerification ? true : false}
              type="text"
              defaultValue={"55 555 55555"}
            />
          </div> */}
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
                <span onClick={handleResend}>
                  {" "}
                  Resend Verification Code in &nbsp;
                </span>
                <span className={styles["highlighted-text"]}>
                  00:{countdown}
                </span>
              </p>
            </>
          )}
          <div className={styles["submit-btn__container"]}>
            <button className={styles["submit-btn"]} onClick={handleSubmit}>
              {isOtpVerification
                ? "Create Account"
                : "Request Verification Code"}
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RegisterForm;
