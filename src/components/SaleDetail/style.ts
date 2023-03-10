import styled from "styled-components"
import { px2rem } from "@/assets/global-style"

export const Wrapper = styled.div`
  .sale-box {
    height: 550px;
    padding-bottom: ${px2rem(61)};
    background-color: #fff !important;
    .sale-main {
      display: -webkit-flex;
      display: flex;
      height: 100%;
      .sale-left {
        width: 20%;
        background: rgba(50, 50, 50, 0.08);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: ${px2rem(60)};
        ul {
          flex: none;
          position: relative;
          a {
            display: block;
            position: relative;
            text-align: center;
            padding: ${px2rem(18)} ${px2rem(10)};
            span {
              font-size: ${px2rem(12)};
              color: #000;
            }
          }
          a:hover {
            background: #fff;
          }
        }
      }
    }
  }
  .sale-detail-box {
    position: relative;
    height: 100%;
    width: 80%;
    .sale-detail {
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  .menu-box {
    height: 100%;
    padding-bottom: ${px2rem(20)};
    overflow-y: auto;
    .menu-detail {
      margin-block-start: 0.25em;
      margin-block-end: 0.25em;
    }
  }
  .menu-top {
    position: relative;
    padding: ${px2rem(4)};
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    .top-title {
      font-size: ${px2rem(16)};
      font-weight: 600;
    }
    span {
      display: block;
      -webkit-flex: 1;
      flex: 1;
      color: #999;
      font-size: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .menu-item {
    height: auto !important;
    display: flex;
    section {
      -webkit-flex: 1;
      flex: 1;
      position: relative;
      padding-right: ${px2rem(14)};
      padding-bottom: ${px2rem(25)};
      .food-name {
        position: relative;
        display: -webkit-flex;
        display: flex;
        span {
          font-size: ${px2rem(15)};
          font-weight: 600;
          padding: ${px2rem(4)};
          white-space: nowrap;
        }
      }
      .food-info {
        color: #999;
        font-size: ${px2rem(13)}; 
        margin-left: ${px2rem(2)};
        margin-top: ${px2rem(8)};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .food-price {
        font-size: ${px2rem(18)};
        font-weight: 600;
        padding-bottom: ${px2rem(4)};
        position: absolute;
        bottom: 0;
      }
      .food-btn {
        position: absolute;
        display: flex;
        right: ${px2rem(8)};
        bottom: ${px2rem(4)};
        span {
          font-size: ${px2rem(18)};
          width: ${px2rem(20)};
          height: ${px2rem(20)};
          border-radius: 50%;
          text-align: center;
          align-items: center;
          justify-content: center;
          background: red;
          color: #fff;
        }
      }
    }
  }
  .img-box {
    width: ${px2rem(92)};
    height: ${px2rem(90)};
    margin-right: ${px2rem(4)};
    position: relative;
  }
  .sale-img {
    width: 100%;
    height: 100%;
  }
`