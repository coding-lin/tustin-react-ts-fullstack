import * as actionTypes from './constants'
import { getCouponsRequest } from '@/api/request'
import { Dispatch } from 'redux'

const setCouponsList = (data: any[]) => ({
  type: actionTypes.SET_COUPONS,
  data
})

export const getCouponsList = () => {
  return (dispatch: Dispatch) => {
    getCouponsRequest()
      .then(data => {
        const action = setCouponsList(data.data)
        dispatch(action)
      })
  }
}