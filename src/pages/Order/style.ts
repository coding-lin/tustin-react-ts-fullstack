import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const OrderWrapper = styled.div`
  width: 100%;
`

export const TabWrapper = styled.div`
  height: ${px2rem(60)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 999;
  ul {
    width: 100%;
    display: flex;
    li {
      position: relative;
      width: 50%;
      text-align: center;
      color: gray;
      &.active{
        color: #000;
        font-weight: bold;
      }
      &.active::after {
        content: '';
        position: absolute;
        left: 39%;
        bottom: ${px2rem(1)};
        width: 22%;
        height: ${px2rem(4)};
        border-radius: ${px2rem(2)};
        background-color: red;
      }
      span {
        padding: ${px2rem(2)};
        line-height: ${px2rem(60)};
        font-size: ${px2rem(18)};
      }
    }
  }
`

export const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`