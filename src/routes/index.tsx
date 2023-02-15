import { lazy, Suspense } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'  // 首页不能延迟加载
import NotFound from '@/pages/NotFound'  // 404页不能延迟加载
const PointsMall = lazy(() => import('@/pages/PointsMall'))  // 积分商城页面
const Food = lazy(() => import('@/pages/Food'))  // 点餐页面
const FoodSearch = lazy(() => import('@/pages/FoodSearch'))  // 商品搜索页面
const Order = lazy(() => import('@/pages/Order'))  // 订单页面
const OrderDetail = lazy(() => import('@/pages/OrderDetail'))  // 订单详情页
const Mine = lazy(() => import('@/pages/Mine'))  // 我的页面

const RouterConfig = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/points-mall" element={<PointsMall />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food-search" element={<FoodSearch />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default RouterConfig