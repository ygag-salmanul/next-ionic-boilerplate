import { style } from "@mui/system";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles["container"]}>
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
