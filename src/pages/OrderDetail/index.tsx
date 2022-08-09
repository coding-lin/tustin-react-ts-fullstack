import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { rootState } from '@/store'
import Slider from '@/components/slider2'
import { getBannersList2 } from '@/pages/Food/store/actionCreators'
import { Wrapper, HeaderWrapper, FinishedWrapper, SliderWrapper, FoodWrapper, OrderWrapper, FooterWrapper } from './style'

interface OrderDetailProps {
  bannersList2: any[];
  getBannerData2Dispatch: () => void;
}

const OrderDetail:React.FC<OrderDetailProps> = (props) => {
  const navigate = useNavigate()
  const { bannersList2 } = props
  const { getBannerData2Dispatch } = props

  useEffect(() => {
    getBannerData2Dispatch()
  }, [])

  const FoodInfo = () => {
    return (
      <>
        <div className='header'>
          <h2>南昌市东华理工大学店</h2>
          <div className='icon'>
            <span><i className='iconfont icon-dianhuatianchong'></i></span>
            <span><i className='iconfont icon-daohang'></i></span>
          </div>
        </div>
        <div className="food">
          <div className='img'>
            <img src="https://img-blog.csdnimg.cn/80f1cc5ff6574e0496c0783893675a70.png" width='100%' height='100%'/>
          </div>
          <div className='info'>
            <h2>冰柠可乐</h2>
            <span>1份</span>
          </div>
          <div className='price'>
            <span>¥6</span>
          </div>
        </div>
        <div className="food">
          <div className="img">
            <img src="https://img-blog.csdnimg.cn/c1f2a08bdb464075b272ca4ba3c67742.png" width='100%' height='100%'/>
          </div>
          <div className='info'>
            <h2>好食成双-香辣鸡腿堡</h2>
            <span>1 x 香辣鸡腿中国汉堡</span>
            <span>1 x 香辣鸡腿中国汉堡</span>
            <span>1份</span>
          </div>
          <div className="discount">
            <span>立减11</span>
          </div>
          <div className='price'>
            <span>¥13</span>
          </div>
        </div>
        <div className="total-price">
          <h2>商品总价</h2>
          <span>¥19</span>
        </div>
        <div className="footer">
          <span>共2件商品，合计：</span>
          <span>¥19</span>
        </div>
      </>
    )
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <i 
          className='iconfont icon-fanhui'
          onClick={() => navigate('/order')}
        ></i>
        <span>订单详情</span>
      </HeaderWrapper>
      <FinishedWrapper>
        <h2>已完成</h2>
        <span>感谢您的支持，欢迎下次再来！</span>
      </FinishedWrapper>
      <SliderWrapper>
        <Slider bannersList2={bannersList2} />
      </SliderWrapper>
      <FoodWrapper>
        { FoodInfo() }
      </FoodWrapper>
      <OrderWrapper>
        <h2>订单信息</h2>
        <div className='info'>
          <p>下单时间：2022-07-12 12:35:26</p>
          <p>订单类型：堂食</p>
          <p>取餐号：523</p>
          <p>订单编号：121625172564890217200</p>
        </div>
      </OrderWrapper>
      <FooterWrapper>
        <button onClick={() => navigate('/food')}>再来一单</button>
      </FooterWrapper>
    </Wrapper>
  )
}

const mapStateToProps = (state:rootState) => ({
  bannersList2: state.food.bannersList2
})

const mapDispatchToProps = (dispatch: any) => ({
  getBannerData2Dispatch() {
    dispatch(getBannersList2())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)
