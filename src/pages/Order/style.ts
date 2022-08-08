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
  width: 100%;
  .current-order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${px2rem(169)};
    margin-bottom: ${px2rem(262)};
    img {
      width: ${px2rem(200)};
      height: ${px2rem(220)};
    }
    span {
      font-size: ${px2rem(16)}; 
      color: #999;
    }
  }
  .history-order {
    width: 94%;
    height: ${px2rem(182)};
    margin-top: ${px2rem(75)};
    margin-bottom: ${px2rem(410)};
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: ${px2rem(10)};
    .header {
      display: flex;
      justify-content: space-between;
      .address {
        margin-top: ${px2rem(10)};
        margin-left: ${px2rem(10)};
        padding: ${px2rem(5)};
        h2 {
          font-size: ${px2rem(16)};
          font-weight: 600;
        }
      }
      .finished {
        margin-top: ${px2rem(8)};
        margin-right: ${px2rem(15)};
        padding: ${px2rem(2)};
        color: #999;
        font-weight: 600;
        span {
          font-size: ${px2rem(13)};
        }
        i {
          margin-left: ${px2rem(2)};
          font-size: ${px2rem(12)};
        }
      }
    }
    .time {
      margin-left: ${px2rem(16)};
      span {
        color: #999;
        font-size: ${px2rem(14)};
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      .image {
        margin-top: ${px2rem(10)};
        margin-left: ${px2rem(16)};
        width: ${px2rem(142)};
        height: ${px2rem(70)};
      }
      .price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: ${px2rem(20)};
        >span:first-child() {
          font-size: ${px2rem(16)};
          font-weight: 600;
        }
        >span:nth-child(2) {
          margin-top: ${px2rem(10)};
          color: #999;
          font-size: ${px2rem(14)};
        }
      }
    }
    button {
      margin-right: ${px2rem(20)};
      border: 0;
      border-radius: ${px2rem(6)};
      float: right;
      background: red;
      color: #fff;
      width: ${px2rem(80)};
      height: ${px2rem(34)};
      font-size: ${px2rem(14)};
    }
  }
`