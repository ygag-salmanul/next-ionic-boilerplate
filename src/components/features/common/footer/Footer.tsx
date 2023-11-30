import styles from "./Footer.module.scss";
import { isPlatform } from "@ionic/react";
const Footer = () => {
  const isIOS = isPlatform("ios");
  return (
    <div className={`${styles["container"]} ${isIOS && styles["bottom-ios"]}`}>
      <p>© Powered by YOUGotaGift.com Ltd. -</p>
      {/* <br /> */}
      <p className={styles["container-primary"]}>
        {" "}
        Privacy Policy <span className={styles["divider"]}>|</span>Terms of Use
      </p>
    </div>
  );
};
export default Footer;
