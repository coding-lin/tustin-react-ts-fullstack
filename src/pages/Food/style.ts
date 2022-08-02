import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${px2rem(60)};
  background: #fff;
  z-index: 999;
  .sousuo {
    input {
      width: 80%;
      margin-top: ${px2rem(14)};
      margin-left: ${px2rem(14)};
      padding-left: ${px2rem(33)};
      font-size: ${px2rem(14)};
      color: gray;
      height: ${px2rem(32)};
      border: none;
      border-radius: ${px2rem(16)};
      background: rgba(50, 50, 50, 0.1);
    }
    i {
      font-size: ${px2rem(20)};
      position: absolute;
      left: ${px2rem(22)};
      top: ${px2rem(20)};
    }
  }
  .shop {
    display: flex;
    height: ${px2rem(66)};
    background: #fff;
    h2 {
      height: ${px2rem(22)};
      padding: ${px2rem(2)};
      font-size: ${px2rem(18)};
      font-weight: bold;
      margin-left: ${px2rem(12)};
      margin-top: ${px2rem(10)};
    }
    i {
      height: ${px2rem(22)};
      padding: ${px2rem(2)};
      margin-top: ${px2rem(12)};
      font-size: ${px2rem(16)};
      font-weight: bold;
    }
  }
`