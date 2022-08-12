import { AnyAction } from 'redux'
import * as actionTypes from './constants'

const initialState = {
  bannersList: [],
  enterLoading: true
}

export default (state=initialState, action:AnyAction) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_LOADING:
      return {
        ...state,
        enterLoading: action.data
      }
    break;
    case actionTypes.SET_BANNERS:
      return {
        ...state,
        bannersList: action.data
      }
    break;
    default:
      return state
  }
}