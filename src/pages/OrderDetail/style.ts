import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: ${px2rem(70)};
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: ${px2rem(52)};
  background: red;
  font-size: ${px2rem(18)};
  font-weight: 600;
  color: #fff;
  line-height: ${px2rem(52)};
  i {
    margin-left: ${px2rem(14)};
  }
  span {
    margin-left: ${px2rem(10)};
  }
`

export const FinishedWrapper = styled.div`
  width: 90%;
  height: ${px2rem(144)};
  background: #fff;
  border-radius: ${px2rem(10)};
  margin-top: ${px2rem(66)};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 2;
  h2 {
    font-size: ${px2rem(24)};
    font-weight: 600;
  }
  span {
    margin-top: ${px2rem(24)};
    font-size: ${px2rem(14)};
  }
`

export const SliderWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${px2rem(-104)};
  background: rgba(50, 50, 50, 0.01);
`

export const FoodWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: ${px2rem(260)};
  border-radius: ${px2rem(10)};
  background: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    h2 {
      padding: ${px2rem(10)};
    }
    h2:after {
      content: '';
      position: absolute;
      width: 92%;
      height: ${px2rem(1)};
      top: ${px2rem(40)};
      left: ${px2rem(12)};
      background: rgba(50, 50, 50, 0.1);
    }
    .icon {
      margin-top: ${px2rem(10)};
      margin-right: ${px2rem(10)};
      span {
        background: rgba(50, 50, 50, 0.12);
        border-radius: 50%;
        margin: ${px2rem(5)};
        i {
          padding: ${px2rem(2)};
          font-size: ${px2rem(22)};
        }
      } 
    }
  }
  .food {
    position: relative;
    display: flex;
    margin-top: ${px2rem(5)};
    margin-bottom: ${px2rem(5)};
    .img {
      margin-top: ${px2rem(10)};
      margin-left: ${px2rem(10)};
      width: ${px2rem(60)};
      height: ${px2rem(60)};
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: ${px2rem(10)};
      margin-left: ${px2rem(6)};
      h2 {
        font-size: ${px2rem(15)};
      }
      span {
        font-size: ${px2rem(13)};
        color: #999;
      }
    }
    .discount {
      margin: ${px2rem(4)};
      width: ${px2rem(50)};
      height: ${px2rem(24)};
      border-radius: ${px2rem(2)};
      background: red;
      span {
        padding-left: ${px2rem(4)};
        font-size: ${px2rem(13)};
        color: #fff;
      }
    }
    .price {
      position: absolute;
      top: ${px2rem(50)};
      right: ${px2rem(20)};
      span {
        font-size: ${px2rem(15)};
        font-weight: 600;
      }
    }
  }
  .total-price {
    height: ${px2rem(38)};
    line-height: ${px2rem(38)};
    display: flex;
    justify-content: space-between;
    font-size: ${px2rem(16)};
    h2 {
      margin-left: ${px2rem(16)};
    }
    span {
      font-size: ${px2rem(15)};
      font-weight: 600;
      margin-right: ${px2rem(20)};
    }
  }
  .total-price:before {
    content: '';
    position: absolute;
    width: 92%;
    height: ${px2rem(1)};
    left: ${px2rem(12)};
    background: rgba(50, 50, 50, 0.1);
  }
  .footer {
    display: inline-block;
    height: ${px2rem(26)};
    margin-top: ${px2rem(2)} 0;
    margin-left: ${px2rem(174)};
    >span:first-child {
      font-size: ${px2rem(13)};
    }
    >span:nth-child(2) {
      font-size: ${px2rem(17)};
      font-weight: 600;
    }
  }
  .footer:before {
    content: '';
    position: absolute;
    width: 92%;
    height: ${px2rem(1)};
    left: ${px2rem(12)};
    bottom: ${px2rem(28)};
    background: rgba(50, 50, 50, 0.1);
  }
`

export const OrderWrapper = styled.div`
  position: relative;
  width: 90%;
  height: ${px2rem(142)};
  margin-top: ${px2rem(10)};
  border-radius: ${px2rem(10)};
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  h2 {
    font-size: ${px2rem(18)};
    font-weight: 600;
    padding: ${px2rem(10)};
  }
  h2:after {
    content: '';
    position: absolute;
    width: 92%;
    height: ${px2rem(1)};
    top: ${px2rem(38)};
    left: ${px2rem(12)};
    background: rgba(50, 50, 50, 0.1);
  }
  .info {
    padding: ${px2rem(12)};
    p {
      padding: ${px2rem(3)};
      font-size: ${px2rem(14)};
      color: #999;
    }
  }
`

export const FooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: ${px2rem(60)};
  button {
    margin-top: ${px2rem(14)};
    margin-right: ${px2rem(18)};
    border: 0;
    border-radius: ${px2rem(6)};
    float: right;
    background: red;
    color: #fff;
    width: ${px2rem(80)};
    height: ${px2rem(34)};
    font-size: ${px2rem(14)};
  }
`