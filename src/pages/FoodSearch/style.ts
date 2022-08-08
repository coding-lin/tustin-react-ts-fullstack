import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: ${px2rem(40)};
  background: #fff;
  font-size: ${px2rem(18)};
  font-weight: 600;
  line-height: ${px2rem(40)};
  i {
    padding: ${px2rem(4)};
    margin-left: ${px2rem(8)};
  }
  span {
    margin-left: ${px2rem(5)};
  }
`