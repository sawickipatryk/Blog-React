import React from 'react'

import MainPage from './pages/MainPage/MainPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Routes>
        <Route
          path={'*'}
          element={
            <MainPage/>
        }
        />
        <Route
          path={'/login'}
          element={
            <SignIn/>
        }
        />
        <Route
          path={'/register'}
          element={
            <SignUp/>
        }
        />
      </Routes>

    </>
  )
}

export default App
