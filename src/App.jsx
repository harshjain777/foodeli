import React from 'react'
import Home from './screens/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './screens/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
