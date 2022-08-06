import { axiosInstance } from "./config"
import { URL_BANNERS, URL_BANNERS2 } from './url'

export const getBannersListRequest = () => 
  axiosInstance.get(URL_BANNERS)  // 首页轮播图

  export const getBannersList2Request = () => 
  axiosInstance.get(URL_BANNERS2)  // 点单页轮播图