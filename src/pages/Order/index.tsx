import React, { useState } from 'react'
import { OrderWrapper, TabWrapper, Container } from './style'

const Order = () => {
  const [tab, setTab] = useState('当前订单')

  const changeTab = (target:string) => {
    setTab(target)
  }

  const EmptyWrapper = () => {
    return (
      <>
        
      </>
    )
  }

  const CurrOrder = () => {
    return (
      <>
        当前订单
      </>
    )
  }

  const HisOrder = () => {
    return (
      <>
        历史订单
      </>
    )
  }

  return (
    <OrderWrapper>
      <TabWrapper>
        <ul>
          <li 
            className={tab == '当前订单' ? 'active' : ''}
            onClick={() => changeTab('当前订单')}
          >
            <span>当前订单</span>
          </li>
          <li 
            className={tab == '历史订单' ? 'active' : ''}
            onClick={() => changeTab('历史订单')}
          >
            <span>历史订单</span>
          </li>
        </ul>
      </TabWrapper>
      <Container>
        { tab == '当前订单' ? CurrOrder() : HisOrder() }
      </Container>
    </OrderWrapper>
  )
}

export default Order
