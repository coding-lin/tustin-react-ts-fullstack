import * as actionTypes from './constants'
import { getBannersListRequest } from '@/api/request'
import { Dispatch } from 'redux'

const setBannersList = (data: any[]) => ({
  type: actionTypes.SET_BANNERS,
  data
})

export const getBannersList = () => {
  return (dispatch: Dispatch) => {
    getBannersListRequest()
      .then(data => {
        const action = setBannersList(data.data)
        dispatch(action)
      })
  }
}