import React, { useEffect } from "react";
import { connect } from "react-redux";
import { rootState } from "@/store";
import { useNavigate } from "react-router-dom";
import { getCouponsList } from "./store/actionCreators";
import { Wrapper, HeaderWrapper, ImgWrapper, CouponsWrapper } from "./style";
import Point from "@/assets/images/point.png";

interface PointsMallProps {
  couponsList: any[];
  getCouponsDataDispatch: () => void;
}

const PointsMall: React.FC<PointsMallProps> = (props) => {
  let navigate = useNavigate();
  const { couponsList } = props;
  const { getCouponsDataDispatch } = props;

  useEffect(() => {
    getCouponsDataDispatch();
  }, []);

  const renderCouponsList = (): any => {
    return (
      <div className="container">
        {couponsList &&
          couponsList.map((coupons) => (
            <div className="coupons-box" key={coupons.id}>
              <div className="coupons-img">
                <img src={coupons.imgUrl} width="100%" height="100%" />
              </div>
              <div className="coupons-info">
                <div className="title">{coupons.title}</div>
                <div className="point">
                  {coupons.point}
                  <span>积分</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <i className="iconfont icon-fanhui" onClick={() => navigate("/")}></i>
        <h2>积分商城</h2>
      </HeaderWrapper>
      <ImgWrapper>
        <div className="point">
          <p>可用积分</p>
          <p>19</p>
          <p>积分明细</p>
        </div>
        <img src={Point} />
      </ImgWrapper>
      <CouponsWrapper>{renderCouponsList()}</CouponsWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state: rootState) => ({
  couponsList: state.pointsMall.couponsList,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCouponsDataDispatch() {
    dispatch(getCouponsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PointsMall);
