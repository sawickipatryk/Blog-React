import React from 'react'

import MainPage from './pages/MainPage/MainPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { auth } from './firebase'

import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import {
  createActionSetIsUserLoggedId,
  createActionSetUserId,
  createActionSetUserDisplayName,
  createActionSetUserEmail,
  createActionSetUserAvatar
} from './state/auth'

import handleAsyncAction from './handleAsyncAction'

function App () {
  const dispatch = useDispatch()

  const {
    isLoading
  } = useSelector((state) => state.loaders)

  React.useEffect(() => {
    handleAsyncAction(async () => {
      // eslint-disable-next-line no-unused-vars
      const listen = onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
          dispatch(createActionSetIsUserLoggedId(true))
          dispatch(createActionSetUserId(user.uid))
          dispatch(createActionSetUserDisplayName(user.displayName && user.displayName))
          dispatch(createActionSetUserEmail(user.email && user.email))
          dispatch(createActionSetUserAvatar(user.photoURL && user.photoURL))
        } else {
          dispatch(createActionSetIsUserLoggedId(false))
        }
      })
    })
  }, [dispatch])

  return (
    <>
      {
      (
        isLoading
      )
        ? (
          <h1>LOADING</h1>
          )
        : null
      }
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
