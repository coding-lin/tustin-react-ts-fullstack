import { AnyAction } from 'redux'
import * as actionTypes from './constants'

const initialState = {
  bannersList2: [],
  detailList: [],
  enterLoading: true
}

export default (state=initialState, action:AnyAction) => {
  switch(action.type) {
    case actionTypes.CHANGE_FOOD_LOADING:
      return {
        ...state,
        enterLoading: action.data
      }
    break;
    case actionTypes.SET_BANNERS2:
      return {
        ...state,
        bannersList2: action.data
      }
    break;
    case actionTypes.SET_DETAIL:
      return {
        ...state,
        detailList: action.data
      }
    break;
    default:
      return state
  }
}