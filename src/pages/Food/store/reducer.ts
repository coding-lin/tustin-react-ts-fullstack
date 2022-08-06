import { AnyAction } from 'redux'
import * as actionTypes from './constants'

const initialState = {
  bannersList2: []
}

export default (state=initialState, action:AnyAction) => {
  switch(action.type) {
    case actionTypes.SET_BANNERS2:
      return {
        ...state,
        bannersList2: action.data
      }
    default:
      return state
  }
}