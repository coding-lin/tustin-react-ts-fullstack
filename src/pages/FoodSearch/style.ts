import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${px2rem(40)};
  background: #fff;
  z-index: 999;
  line-height: ${px2rem(40)};
  i {
    font-size: ${px2rem(18)};
    font-weight: 600;
    padding: ${px2rem(4)};
    margin-left: ${px2rem(8)};
  }
  span {
    font-size: ${px2rem(18)};
    font-weight: 600;
    margin-left: ${px2rem(5)};
  }
`