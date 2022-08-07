import { axiosInstance } from "./config"
import { 
  URL_BANNERS, 
  URL_BANNERS2,
  URL_DETAIL,
  URL_COUPONS
} from './url'

export const getBannersListRequest = () => 
  axiosInstance.get(URL_BANNERS)  // 首页轮播图

export const getCouponsRequest = () => 
  axiosInstance.get(URL_COUPONS)  // 积分商城抵用券

export const getBannersList2Request = () => 
  axiosInstance.get(URL_BANNERS2)  // 点单页轮播图

export const getDetailRequest = () => 
  axiosInstance.get(URL_DETAIL)  // 点单页详情