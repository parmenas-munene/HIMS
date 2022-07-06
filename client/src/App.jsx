import React from 'react'

import Layout from './components/layout/Layout'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
