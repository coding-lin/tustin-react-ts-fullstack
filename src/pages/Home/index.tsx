import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { rootState } from '@/store'
import { getBannersList } from './store/actionCreators'
import Slider from '@/components/slider'
import Loading from '@/components/common/loading'
import HallFood from '@/assets/images/hall-food.png'
import Pack from '@/assets/images/pack.png'
import Img1 from '@/assets/images/1.jpg'
import Img2 from '@/assets/images/2.png'
import Money from '@/assets/images/money.png'
import TATA from '@/assets/images/tata.png'
import Choujiang from '@/assets/images/choujiang.png'
import ShoppingMall from '@/assets/images/shopping-mall.png'
import { Wrapper, HeaderWrapper, QRWrapper, Container, ImgWrapper } from './style'

interface HomeProps {
  bannersList: any[];
  enterLoading: boolean;
  getBannerDataDispatch: () => void;
}

const Home:React.FC<HomeProps> = (props) => {
  const navigate = useNavigate()
  const { enterLoading, bannersList } = props
  const { getBannerDataDispatch } = props

  useEffect(() => {
    navigate('/')
  }, [])

  useEffect(() => {
    getBannerDataDispatch()
  }, [])

  return (
    <Wrapper>
      { enterLoading ? <Loading /> : <Slider bannersList={bannersList}></Slider>}
      <HeaderWrapper>
        <div onClick={() => navigate('food')}>
          <img src={HallFood} />
          <p>堂食</p>
          <span>到店就餐</span>
        </div>
        <div onClick={() => navigate('food')}>
          <img src={Pack} />
          <p>兜走</p>
          <span>打包自提</span>
        </div>
      </HeaderWrapper>
      <QRWrapper>
        <div className='tx'>
          <img src={Img1} /> 
        </div>
        <div className='info'>
          <p>黄家林</p>
          <span>说爱趁现在，就是黑凤梨</span>
        </div>
        <div className='qr'>
          <img src={Img2} />
        </div>
      </QRWrapper>
      <Container>
        <div>
          <span>储值通道</span>
          <img src={Money} />
        </div>
        <div>
          <span>塔塔专属</span>
          <img src={TATA} />
        </div>
        <div>
          <span>微博抽奖</span>
          <img src={Choujiang} />
        </div>
      </Container>
      <ImgWrapper>
        <Link to="points-mall">
          <img src={ShoppingMall} />
        </Link> 
      </ImgWrapper>
    </Wrapper>
  )
}

const mapStateToProps = (state:rootState) => ({
  enterLoading: state.home.enterLoading,
  bannersList: state.home.bannersList
})

const mapDispatchToProps = (dispatch: any) => ({
  getBannerDataDispatch() {
    dispatch(getBannersList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)