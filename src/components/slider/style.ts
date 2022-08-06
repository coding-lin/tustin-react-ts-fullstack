import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const SliderContainer = styled.div`
  width: 100%;
  .slider-container {
    position: relative;
    width: 100%;
    height: ${px2rem(288)};
    overflow: hidden;
    z-index: 1;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      bottom: ${px2rem(35)};
    }
    span.swiper-pagination-bullet {
      width: ${px2rem(10)};
      height: ${px2rem(10)};
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
`;
