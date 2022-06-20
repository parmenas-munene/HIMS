import React from 'react'

import Layout from './components/layout/Layout'

import { BrowswerRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
        <BrowswerRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} /> 
                </Route>
            </Routes>
        </BrowswerRouter>
  )
}

export default App
