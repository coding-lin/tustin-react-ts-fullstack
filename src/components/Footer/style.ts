import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  border-top: 1px solid rgba(50, 50, 50, 0.01);
  display: flex;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #000;
    &.active {
      color: yellow;
    }
    i {
      font-size: 32px;
    }
    span {
      font-size: 14px;
      color: #000;
    }
  }
`