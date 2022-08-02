import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: ${px2rem(60)};
  background: rgba(50, 50, 50, 0.01);
`

export const HeaderWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-top: ${px2rem(180)};
  margin-left: auto;
  margin-right: auto;
  height: ${px2rem(196)};
  border-radius: ${px2rem(10)};
  background: #fff;
  display: flex;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      margin: 0 auto;
      width: ${px2rem(100)};
      height: ${px2rem(96)};
    }
    p {
      padding: ${px2rem(5)};
      font-size: ${px2rem(18)};
      font-weight: 600;
    }
    span {
      padding: ${px2rem(5)};
      font-size: ${px2rem(14)};
      color: gray;
    }
  }
  >div:first-child:after {
    content: '';
    display: inline-block;
    position: absolute;
    width: ${px2rem(1)};
    height: ${px2rem(156)};
    top: ${px2rem(20)};
    left: 50%;
    background-color: rgba(50, 50, 50, 0.1);
  }
`

export const QRWrapper = styled.div`
  width: 90%;
  background: #fff;
  height: ${px2rem(80)};
  margin-top: ${px2rem(14)};
  margin-left: auto;
  margin-right: auto;
  border-radius: ${px2rem(10)};
  display: flex;
  .tx {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      margin: 0 auto;
      width: ${px2rem(52)};
      height: ${px2rem(52)};
      border: ${px2rem(1)} solid orange;
      border-radius: 50%;
    }
  }
  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    p {
      padding: ${px2rem(4)};
      font-size: ${px2rem(18)};
      font-weight: 600;
    }
    span {
      padding: ${px2rem(4)};
      font-size: ${px2rem(14)};
    }
  }
  .qr {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      margin: 0 auto;
      width: ${px2rem(54)};
      height: ${px2rem(52)};
    }
  }
`

export const Container = styled.div`
  width: 90%;
  height: ${px2rem(136)};
  margin: ${px2rem(25)} auto;
  display: flex;
  div {
    border-radius: ${px2rem(6)};
    background: #fff;
    display: flex;
    width: 30%;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    span {
      padding: ${px2rem(5)};
      font-size: ${px2rem(15)};
    }
    img {
      margin: 0 auto;
      width: ${px2rem(70)};
      height: ${px2rem(70)};
    }
  }
  >div:nth-child(2) {
    margin-left: ${px2rem(8)};
    margin-right: ${px2rem(8)};
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`