import { axiosInstance } from "./config"
import { URL_BANNERS } from './url'

export const getBannersListRequest = () => 
  axiosInstance.get(URL_BANNERS)  // 首页轮播图