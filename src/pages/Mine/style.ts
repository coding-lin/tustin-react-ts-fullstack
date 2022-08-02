import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: ${px2rem(80)};
`

export const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: ${px2rem(200)};
  }
`

export const InfoWrapper = styled.div`
  width: 100%;
  height: ${px2rem(82)};
  background: rgba(50, 50, 50, 0.1);
  color: #fff;
  position: absolute;
  top: ${px2rem(118)};
  h2 {
    font-size: ${px2rem(20)};
    margin-left: ${px2rem(20)};
    margin-top: ${px2rem(8)};
    padding: ${px2rem(1)};
  }
  span {
    margin-left: ${px2rem(20)};
    padding: ${px2rem(2)};
    font-size: ${px2rem(13)};
  }
`

export const VipWrapper = styled.div`
  width: 90%;
  height: ${px2rem(180)};
  position: absolute;
  border-radius: ${px2rem(10)};
  background: #fff;
  top: ${px2rem(182)};
  left: 5%;
  .tx {
    img {
      position: absolute;
      width: ${px2rem(60)};
      height: ${px2rem(60)};
      border-radius: 50%;
      top: ${px2rem(-24)};
      right: ${px2rem(22)};
    }
  }
  .vip {
    margin: ${px2rem(20)};
    display: flex;
    h2 {
      font-size: ${px2rem(16)};
      font-weight: 600;
      padding: ${px2rem(4)};
    }
    span {
      width: ${px2rem(30)};
      height: ${px2rem(20)};
      line-height: ${px2rem(20)};
      text-align: center;
      font-size: ${px2rem(14)};
      font-weight: bold;
      color: #fff;
      border-radius: ${px2rem(2)};
      background: rgba(50, 50, 50, 0.2);
      padding: ${px2rem(2)} ${px2rem(8)};
    }
  }
  .info {
    display: flex;
    div {
      width: 30%;
      height: ${px2rem(116)};
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      span {
        margin-bottom: ${px2rem(15)};
        font-size: ${px2rem(15)};
        padding: ${px2rem(2)};
        color: gray;
      }
      p {
        height: ${px2rem(34)};
        font-size: ${px2rem(26)};
        line-height: ${px2rem(34)};
        font-weight: 600;
      }
      img {
        width: ${px2rem(38)};
        height: ${px2rem(34)};
      }
    }
    >div:first-child::after {
      content: "";
      left: 33%;
      position: absolute;
      background-color: rgba(50, 50, 50, 0.1);
      width: ${px2rem(1)};
      height: ${px2rem(60)};
    }
    >div:nth-child(2)::after {
      content: "";
      left: 66%;
      position: absolute;
      background-color: rgba(50, 50, 50, 0.1);
      width: ${px2rem(1)};
      height: ${px2rem(60)};
    }
  }
`

export const List = styled.ul`
  width: 90%;
  height: ${px2rem(424)};
  background: #fff;
  margin-top: ${px2rem(180)};
  margin-left: auto;
  margin-right: auto;
  border-radius: ${px2rem(10)};
  li {
    position: relative;
    height: ${px2rem(52)};
    display: flex;
    line-height: ${px2rem(50)};
    border-bottom: ${px2rem(1)} solid rgba(50, 50, 50, 0.10);
    i {
      margin-left: ${px2rem(6)};
      margin-right: ${px2rem(6)};
      padding: ${px2rem(2)};
      font-size: ${px2rem(20)};
    }
    span {
      font-family: "宋体";
      font-size: ${px2rem(16)};
      padding: ${px2rem(2)};
      font-weight: bold;
      &.yue {
        position: absolute;
        right: ${px2rem(42)};
        color: gray;
      }
    }
    >i:last-child {
      position: absolute;
      right: ${px2rem(10)};
      color: gray;
      font-weight: bold;
    }
  }
  >li:last-child {
    border-bottom: none;
  }
`