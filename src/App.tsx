import { useState } from 'react'
import { GlobalStyle } from './style'
import Footer from '@/components/Footer'
import Routes from '@/routes'
import './App.css'

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
