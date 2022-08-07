import { AnyAction } from 'redux'
import * as actionTypes from './constants'

const initialState = {
  couponsList: []
}

export default (state=initialState, action:AnyAction) => {
  switch(action.type) {
    case actionTypes.SET_COUPONS:
      return {
        ...state,
        couponsList: action.data
      }
    default:
      return state
  }
}