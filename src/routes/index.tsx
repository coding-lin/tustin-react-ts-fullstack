import React, { lazy, Suspense } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'  // 首页不能延迟加载
import Food from '@/pages/Food'  // 点餐页面
import Order from '@/pages/Order'  // 订单页面
import Mine from '@/pages/Mine'  // 我的页面

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