import React, { useEffect, useState, memo } from "react";
import Swiper from "swiper";
import { SliderContainer } from "./style";

interface BannerProps {
  bannersList: any[];
}

const Slider: React.FC<BannerProps> = (props) => {
  const { bannersList } = props;
  const [sliderSwiper, setSliderSwiper] = useState(null);

  useEffect(() => {
    if (bannersList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannersList.length, sliderSwiper]);

  return (
    <SliderContainer>
      {/* <div className="before"></div> */}
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            // 最好不用index 做key
            bannersList.map((slide) => {
              return (
                <div className="swiper-slide" key={slide.imageUrl}>
                  <div className="slider-nav">
                    <img
                      src={slide.imageUrl}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
};

export default memo(Slider);
