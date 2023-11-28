import styles from "./CorporateService.module.scss";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CorporateService = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-wrapper"]}>
        <div className={styles["container-ring"]}>
          <img
            className={styles["container-about-gift"]}
            src="/assets/about-gift-cards.png"
            alt=""
          />
        </div>
        <div className={styles["container-buttons"]}>
          <div className={styles["container-ring2"]}>
            <ArrowBackIosNewRoundedIcon className="prev" fontSize="small" />
          </div>
          <div className={styles["container-ring2"]}>
            <ArrowForwardIosRoundedIcon className="next" fontSize="small" />
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: `.prev`,
          nextEl: `.next`,
        }}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <div className={styles["container-title"]}>
              <h3 className={styles["primary"]}>
              Buy Cards
                <br />
                <span className={styles["container-title-secondary"]}>
                  The Inside Scoop
                </span>
              </h3>
              <p>It’s Digital, Seamless & Quick</p>
            </div>
            <div className={styles["container-description"]}>
              <p>
                Experience the ultimate shopping with Nakheel mall Gift Cards!
                Our Gift Cards are your passport to the diverse world of retail
                within our mall. When you purchase one of our Gift Cards,
                you&apos;re not just giving a present; you&apos;re gifting an
                unforgettable experience.
                <br />
                <br />
                Simply load your Gift Card with your preferred amount, and
                you&apos;re ready to explore our myriad of stores.
                <br />
                <br />
                Present your card at checkout, and watch your purchase expenses
                subtract from the card&apos;s balance. For added convenience,
                check your card&apos;s balance online as needed.
                <br />
                <br />
                Treat yourself or your loved ones to an exceptional Nakheel mall
                adventure with our Gift Cards—the perfect way to celebrate any
                occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className={styles["container-title"]}>
              <h3 className={styles["primary"]}>
                Gift Cards
                <br />
                <span className={styles["container-title-secondary"]}>
                  The Inside Scoop
                </span>
              </h3>
              <p>It’s Digital, Seamless & Quick</p>
            </div>
            <div className={styles["container-description"]}>
              <p>
                Experience the ultimate shopping with Nakheel mall Gift Cards!
                Our Gift Cards are your passport to the diverse world of retail
                within our mall. When you purchase one of our Gift Cards,
                you&apos;re not just giving a present; you&apos;re gifting an
                unforgettable experience.
                <br />
                <br />
                Simply load your Gift Card with your preferred amount, and
                you&apos;re ready to explore our myriad of stores.
                <br />
                <br />
                Present your card at checkout, and watch your purchase expenses
                subtract from the card&apos;s balance. For added convenience,
                check your card&apos;s balance online as needed.
                <br />
                <br />
                Treat yourself or your loved ones to an exceptional Nakheel mall
                adventure with our Gift Cards—the perfect way to celebrate any
                occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className={styles["container-title"]}>
              <h3 className={styles["primary"]}>
                Activate Card
                <br />
                <span className={styles["container-title-secondary"]}>
                  The Inside Scoop
                </span>
              </h3>
              <p>It’s Digital, Seamless & Quick</p>
            </div>
            <div className={styles["container-description"]}>
              <p>
                Experience the ultimate shopping with Nakheel mall Gift Cards!
                Our Gift Cards are your passport to the diverse world of retail
                within our mall. When you purchase one of our Gift Cards,
                you&apos;re not just giving a present; you&apos;re gifting an
                unforgettable experience.
                <br />
                <br />
                Simply load your Gift Card with your preferred amount, and
                you&apos;re ready to explore our myriad of stores.
                <br />
                <br />
                Present your card at checkout, and watch your purchase expenses
                subtract from the card&apos;s balance. For added convenience,
                check your card&apos;s balance online as needed.
                <br />
                <br />
                Treat yourself or your loved ones to an exceptional Nakheel mall
                adventure with our Gift Cards—the perfect way to celebrate any
                occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className={styles["container-title"]}>
              <h3 className={styles["primary"]}>
                Track Spends
                <br />
                <span className={styles["container-title-secondary"]}>
                  The Inside Scoop
                </span>
              </h3>
              <p>It’s Digital, Seamless & Quick</p>
            </div>
            <div className={styles["container-description"]}>
              <p>
                Experience the ultimate shopping with Nakheel mall Gift Cards!
                Our Gift Cards are your passport to the diverse world of retail
                within our mall. When you purchase one of our Gift Cards,
                you&apos;re not just giving a present; you&apos;re gifting an
                unforgettable experience.
                <br />
                <br />
                Simply load your Gift Card with your preferred amount, and
                you&apos;re ready to explore our myriad of stores.
                <br />
                <br />
                Present your card at checkout, and watch your purchase expenses
                subtract from the card&apos;s balance. For added convenience,
                check your card&apos;s balance online as needed.
                <br />
                <br />
                Treat yourself or your loved ones to an exceptional Nakheel mall
                adventure with our Gift Cards—the perfect way to celebrate any
                occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default CorporateService;
