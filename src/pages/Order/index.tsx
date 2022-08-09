import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Empty from '@/assets/images/empty.png'
import { OrderWrapper, TabWrapper, Container } from './style'

const Order = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState('当前订单')

  const changeTab = (target:string) => {
    setTab(target)
  }

  const CurrOrder = () => {
    return (
      <div className='current-order'>
        <img src={Empty} />
        <span>您今天还未点单</span>
      </div>
    )
  }

  const HisOrder = () => {
    return (
      <div className='history-order'>
        <div onClick={() => navigate('/order-detail')}>
          <div className="header">
            <div className='address'>
              <h2>南昌市东华理工大学店</h2>
            </div>
            <div className="finished">
              <span>已完成</span>
              <i className='iconfont icon-xiangyoujiantou'></i>
            </div>
          </div>
          <div className="time">
            <span>2022-07-12 12:35:26</span>
          </div>
          <div className="info">
            <div className='image'>
              <img src="https://img-blog.csdnimg.cn/b9bc32f3497f4b7ca4eda0afd2128095.png" width="100%" height="100%" />
            </div>
            <div className="price">
              <span>¥19</span>
              <span>共2件</span>
            </div>
          </div>
        </div>
        <button onClick={() => navigate('/food')}>再来一单</button>
      </div>
    )
  }

  return (
    <OrderWrapper>
      <TabWrapper>
        <ul>
          <li 
            className={tab === '当前订单' ? 'active' : ''}
            onClick={() => changeTab('当前订单')}
          >
            <span>当前订单</span>
          </li>
          <li 
            className={tab === '历史订单' ? 'active' : ''}
            onClick={() => changeTab('历史订单')}
          >
            <span>历史订单</span>
          </li>
        </ul>
      </TabWrapper>
      <Container>
        { tab === '当前订单' ? CurrOrder() : HisOrder() }
      </Container>
    </OrderWrapper>
  )
}

export default Order
