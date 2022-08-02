import styled from 'styled-components'
import { px2rem } from "@/assets/global-style"

export const FooterWrapper = styled.div`
  width: 100%;
  height: ${px2rem(60)};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  border-top: ${px2rem(1)} solid rgba(50, 50, 50, 0.01);
  display: flex;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #000;
    &.active {
      color: orange;
    }
    i {
      font-size: ${px2rem(32)};
    }
    span {
      font-size: ${px2rem(14)};
      color: #000;
    }
  }
`