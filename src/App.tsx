import { useState, Suspense } from 'react'
import { GlobalStyle } from './style'
import Footer from '@/components/Footer'
import Routes from '@/routes'

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Suspense fallback={<div>loading...</div>}>
        <Routes />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
