import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const SliderContainer = styled.div`
  width: 100%;
  margin-top: ${px2rem(114)};
  height: ${px2rem(130)};
  .slider-container {
    position: relative;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-radius: ${px2rem(14)};
    height: ${px2rem(120)};
    overflow: hidden;
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
      bottom: ${px2rem(6)};
    }
    span.swiper-pagination-bullet {
      width: ${px2rem(10)};
      height: ${px2rem(10)};
    }
    .swiper-pagination-bullet-active {
      background: #000;
    }
  }
`;
