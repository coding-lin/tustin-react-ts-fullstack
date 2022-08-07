import { combineReducers } from 'redux'

import { reducer as bannerReducer } from '@/pages/Home/store/index'
import { reducer as couponsReducer } from '@/pages/PointsMall/store/index'
import { reducer as banner2Reducer } from '@/pages/Food/store/index'

export default combineReducers({
  home: bannerReducer,
  pointsMall: couponsReducer,
  food: banner2Reducer
})