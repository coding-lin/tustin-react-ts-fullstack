import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
  background: rgba(50, 50, 50, 0.01);
`

export const HeaderWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-top: 180px;
  margin-left: auto;
  margin-right: auto;
  height: 196px;
  border-radius: 10px;
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
      width: 100px;
      height: 96px;
    }
    p {
      padding: 5px;
      font-size: 18px;
      font-weight: 600;
    }
    span {
      padding: 5px;
      font-size: 14px;
      color: gray;
    }
  }
`

export const QRWrapper = styled.div`
  width: 90%;
  background: #fff;
  height: 80px;
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  display: flex;
  .tx {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      margin: 0 auto;
      width: 52px;
      height: 52px;
      border: 1px solid orange;
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
      padding: 4px;
      font-weight: 18px;
      font-weight: 600;
    }
    span {
      padding: 4px;
      font-size: 14px;
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
      width: 52px;
      height: 52px;
    }
  }
`

export const Container = styled.div`
  width: 90%;
  height: 136px;
  margin: 25px auto;
  display: flex;
  div {
    border-radius: 6px;
    background: #fff;
    display: flex;
    width: 30%;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    span {
      padding: 5px;
      font-size: 15px;
    }
    img {
      margin: 0 auto;
      width: 70px;
      height: 70px;
    }
  }
  >div:nth-child(2) {
    margin-left: 8px;
    margin-right: 8px;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`