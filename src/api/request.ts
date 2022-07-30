import { axiosInstance } from "./config"
import { URL_BANNERS } from './url'

export const getBannersRequest = () => 
  axiosInstance(URL_BANNERS)