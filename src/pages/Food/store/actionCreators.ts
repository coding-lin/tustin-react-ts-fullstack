import * as actionTypes from './constants'
import { getBannersList2Request } from '@/api/request'
import { Dispatch } from 'redux'

const setBannersList2 = (data: any[]) => ({
  type: actionTypes.SET_BANNERS2,
  data
})

export const getBannersList2 = () => {
  return (dispatch: Dispatch) => {
    getBannersList2Request()
      .then(data => {
        const action = setBannersList2(data.data)
        dispatch(action)
      })
  }
}