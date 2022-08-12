import * as actionTypes from './constants'
import { getBannersListRequest } from '@/api/request'
import { Dispatch } from 'redux'

const setBannersList = (data: any[]) => ({
  type: actionTypes.SET_BANNERS,
  data
})

const changeLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_HOME_LOADING,
  data
})

export const getBannersList = () => {
  return (dispatch: Dispatch) => {
    getBannersListRequest()
      .then(data => {
        const action = setBannersList(data.data)
        dispatch(action)
        dispatch(changeLoading(false))
      })
  }
}