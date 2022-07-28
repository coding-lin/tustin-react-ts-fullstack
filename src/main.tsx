import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './rem'
import { Provider } from 'react-redux'
import store from '@/store'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
