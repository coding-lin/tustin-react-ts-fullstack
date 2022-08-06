import React, { useEffect, useState, memo } from "react";
import Swiper from "swiper";
import { SliderContainer } from "./style";

interface Banner2Props {
  bannersList2: any[];
}

const Slider: React.FC<Banner2Props> = (props) => {
  const { bannersList2 } = props;
  const [sliderSwiper, setSliderSwiper] = useState(null);

  useEffect(() => {
    if (bannersList2.length && !sliderSwiper) {
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannersList2.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannersList2.map((slide) => {
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
