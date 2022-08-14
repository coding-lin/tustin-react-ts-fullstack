import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPath } from '@/utils' 
import shouye1 from '@/assets/images/shouye1.png'
import shouye2 from '@/assets/images/shouye2.png'

const Footer = () => {
  const { pathname } = useLocation()
  if (isPath(pathname)) return

  return (
    <FooterWrapper>
      {/* <Link to="/" className={classnames({active:pathname == '/'})}>
        <i className='iconfont icon-shouye'></i>
        <span>首页</span>
      </Link> */}
      <Link to="/">
        { pathname == '/' ? <img src={shouye2} /> : <img src={shouye1} /> }
        <span>首页</span>
      </Link>
      <Link to="/food" className={classnames({active:pathname == '/food'})}>
        <i className='iconfont icon-hanbao'></i>
        <span>点单</span>
      </Link>
      <Link to="/order" className={classnames({active:pathname == '/order'})}>
        <i className='iconfont icon-dingdan'></i>
        <span>订单</span>
      </Link>
      <Link to="/mine" className={classnames({active:pathname == '/mine'})}>
        <i className='iconfont icon-wode'></i>
        <span>我的</span>
      </Link>
    </FooterWrapper>
  )
}

export default Footer