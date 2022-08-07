import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: ${px2rem(40)};
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    left: ${px2rem(10)};
    top: ${px2rem(11)};
    font-size: ${px2rem(18)};
    font-weight: bold;
  }
  h2 {
    margin-left: ${px2rem(30)};
    margin-top: ${px2rem(9)};
    padding: ${px2rem(1)};
    font-size: ${px2rem(18)};
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  .point {
    margin-top: ${px2rem(40)};
    width: 48%;
    height: ${px2rem(160)};
    background: #fff;
    p {
      margin-left: ${px2rem(16)};
    }
    >p:first-child {
      padding-top: ${px2rem(20)};
      margin-top: ${px2rem(40)};
      font-size: ${px2rem(13)};
    }
    >p:nth-child(2) {
      margin-top: ${px2rem(20)};
      font-size: ${px2rem(30)};
      font-weight: bold;
    }
    >p:nth-child(3) {
      margin-top: ${px2rem(30)};
      font-size: ${px2rem(16)};
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 52%;
    height: ${px2rem(160)};
  }
`

export const CouponsWrapper = styled.div`
  margin-top: ${px2rem(20)};
  width: 100%;
  background: #fff;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .coupons-box {
      margin-top: ${px2rem(24)};
      .coupons-img {
        width: ${px2rem(150)};
        height: ${px2rem(84)};
        margin: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .coupons-info {
        width: ${px2rem(150)};
        height: ${px2rem(76)};
        margin: auto;
        .title {
          font-size: ${px2rem(16)};
          margin: ${px2rem(6)} 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .point {
          font-size: ${px2rem(24)};
          margin-top: ${px2rem(4)};
          font-weight: bold;
          span {
            color: gray;
            font-size: ${px2rem(12)};
            padding: ${px2rem(4)};
          }
        }
      }
    }
  }
`