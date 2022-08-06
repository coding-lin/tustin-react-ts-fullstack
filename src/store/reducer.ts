import { combineReducers } from 'redux'

import { reducer as bannerReducer } from '@/pages/Home/store/index'

export default combineReducers({
  home: bannerReducer
})