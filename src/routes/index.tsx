import { lazy } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'  // 首页不能延迟加载
const Food = lazy(() => import('@/pages/Food'))  // 点餐页面
const Order = lazy(() => import('@/pages/Order'))  // 订单页面
const Mine = lazy(() => import('@/pages/Mine'))  // 我的页面

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/mine" element={<Mine />}></Route>
      </Routes>
    </>
  )
}