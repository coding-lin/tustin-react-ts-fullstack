import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './rem'
import '@/assets/font1/iconfont.css'
import '@/assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import { Provider } from 'react-redux'
import store from '@/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
