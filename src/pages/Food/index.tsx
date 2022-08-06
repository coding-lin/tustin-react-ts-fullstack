import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import Slider from '@/components/slider2'
import { getBannersList2 } from './store/actionCreators'
import { Wrapper, HeaderWrapper } from './style'

interface FoodProps {
  bannersList2: any[];
  getBannerData2Dispatch: () => void;
}

const Food:React.FC<FoodProps> = (props) => {
  const { bannersList2 } = props
  console.log(bannersList2)
  const { getBannerData2Dispatch } = props

  useEffect(() => {
    getBannerData2Dispatch()
  }, [])

  return (
    <Wrapper>
      <HeaderWrapper>
        <div className='sousuo'>
          <input type="text" placeholder='搜索商品' />
          <i className='iconfont icon-sousuo'></i>
        </div>
        <div className='shop'>
          <h2>南昌市东华理工大学店</h2>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </div>
        <div>

        </div>
      </HeaderWrapper>
      <Slider bannersList2={bannersList2}></Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Food)
