import { Dispatch } from 'redux'
import * as actionTypes from './constants'
import { getBannersList2Request, getDetailRequest } from '@/api/request'

const setBannersList2 = (data: any[]) => ({
  type: actionTypes.SET_BANNERS2,
  data
})

const setDetail = (data: any[]) => ({
  type: actionTypes.SET_DETAIL,
  data
})

const changeLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_FOOD_LOADING,
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

export const getDetailList = () => {
  return (dispatch: Dispatch) => {
    getDetailRequest()
      .then(data => {
        const action = setDetail(data.data)
        dispatch(action)
        dispatch(changeLoading(false))
      })
  }
}