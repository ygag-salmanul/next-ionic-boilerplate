import styles from "./CorporateService.module.scss";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LANDING_CORPORATE_SERVICE_DATA } from "@/src/__mockData__/index.data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const CorporateService = () => {
  const [service, setService] = useState(LANDING_CORPORATE_SERVICE_DATA[0]);
  return (
    <div className={styles["container"]}>
      <div className={styles["container-wrapper"]}>
        <div className={styles["container-ring"]}>
          <img
            className={styles["container-about-gift"]}
            src={service.logo}
            alt="icon"
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
        onSlideChange={(swiper) =>  setService(LANDING_CORPORATE_SERVICE_DATA[swiper.activeIndex])}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {LANDING_CORPORATE_SERVICE_DATA.map((item,index) => (
          <SwiperSlide key={index} >
            
            <div>
              <div className={styles["container-title"]}>
                <h3 className={styles["primary"]}>
                  {item.headingPrimary}
                  <br />
                  <span className={styles["container-title-secondary"]}>
                    {item.headingSecondary}
                  </span>
                </h3>
                <p>{item.subHeading}</p>
              </div>
              <div className={styles["container-description"]}>
                <p>
                  {item.description1}
                  <br />
                  <br />
                  {item.description2}
                  <br />
                  <br />
                  {item.description3}
                  <br />
                  <br />
                {item.description4}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CorporateService;
