import React from 'react'
import { Wrapper, HeaderWrapper } from './style'

const Food = () => {
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
    </Wrapper>
  )
}

export default Food
