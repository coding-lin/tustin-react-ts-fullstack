import React from 'react'
import { Wrapper, ImgWrapper, InfoWrapper, VipWrapper, List } from './style'
import TusTin from '@/assets/images/tustin.png' 
import TX from '@/assets/images/1.jpg'
import Vip from '@/assets/images/2.png'

const Mine = () => {

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={TusTin} />
      </ImgWrapper>
      <InfoWrapper>
        <h2>Hey, 黄家林</h2>
        <span>说爱趁现在，就是黑凤梨</span>
      </InfoWrapper>
      <VipWrapper>
        <div className="tx">
          <img src={TX} />
        </div>
        <div className='vip'>
          <h2>塔塔会员</h2>
          <span>Lv1</span>
        </div>
        <div className="info">
          <div>
            <span>积分</span>
            <p>19</p>
          </div>
          <div>
            <span>优惠券</span>
            <p>3</p>
          </div>
          <div>
            <span>会员码</span>
            <p><img src={Vip} /></p>
          </div>
        </div>
      </VipWrapper>
      <List>
        <li>
          <i className='iconfont icon-zhanghuyue'></i>
          <span>账户余额</span>
          <span className='yue'>81元</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-lipinka'></i>
          <span>礼品卡</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-gouwuche'></i>
          <span>购物车</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-dingdanguanli'></i>
          <span>订单管理</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-duihuan'></i>
          <span>团购兑换</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-renwu'></i>
          <span>任务专区</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-gerenzhongxin'></i>
          <span>会员资料</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
        <li>
          <i className='iconfont icon-saoyisao'></i>
          <span>扫一扫</span>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </li>
      </List>
    </Wrapper>
  )
}

export default Mine
