import { AnyAction } from 'redux'
import * as actionTypes from './constants'

const initialState = {
  bannersList: []
}

export default (state=initialState, action:AnyAction) => {
  switch(action.type) {
    case actionTypes.SET_BANNERS:
      return {
        ...state,
        bannersList: action.data
      }
    default:
      return state
  }
}