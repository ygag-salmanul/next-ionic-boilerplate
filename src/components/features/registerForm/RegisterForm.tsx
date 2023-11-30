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
import { CountDownType } from "@/src/interfaces/common.interface";
import Countdown from "../common/otpCountdown/CountDown";
import Link from "next/link";

const RegisterForm = ({ isOtpVerification = false }) => {
  const history = useHistory();
  const [phoneNumber, setPhoneNumber] = useState(5555555555);
  const [countryCode, setCountryCode] = useState("");
  const [countDownStatus, setCountDownStatus] =
    useState<CountDownType>("start");

  const handleResend = () => {
    setCountDownStatus("start");
  };

  const handleSubmit = () => {
    if (isOtpVerification) {
      history.push("/login");
    } else {
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
          <IonTitle className={`${styles['ion-title']} ion-text-center`}>
            <h2 className={styles.greeting}>Create an Account</h2>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className={styles.container}>
          <p className={styles["dimmed-text"]}>
            Already have an account?&nbsp;
            <Link href={"/login"} className={styles["highlighted-text"]}>
              Login
            </Link>
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
