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
  createActionSetUserAvatar,
  createActionRemoveIsUserLoggedId
} from './state/auth'

import handleAsyncAction from './handleAsyncAction'
import { Typography, Box } from '@mui/material'

function App () {
  const dispatch = useDispatch()

  const {
    isLoading
  } = useSelector((state) => state.loaders)
  const {
    isUserLoggedIn
  } = useSelector((state) => state.auth)

  React.useEffect(() => {
    handleAsyncAction(async () => {
      // eslint-disable-next-line no-unused-vars
      const listen = onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
          console.log('true')
          dispatch(createActionSetIsUserLoggedId())
          dispatch(createActionSetUserId(user.uid))
          dispatch(createActionSetUserDisplayName(user.displayName && user.displayName))
          dispatch(createActionSetUserEmail(user.email && user.email))
          dispatch(createActionSetUserAvatar(user.photoURL && user.photoURL))
        } else {
          dispatch(createActionRemoveIsUserLoggedId())
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
          <Box
            sx={{
              backgroundColor: 'white',
              position: 'fixed',
              zIndex: 999999999,
              height: '100vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant={'h1'}
              sx={{
                color: 'black'
              }}
            >LOADING.........
            </Typography>
          </Box>

          )
        : null
      }
      {
        (
          isUserLoggedIn
        )
          ? (
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
            )
          : null
      }
      {
        (
          !isUserLoggedIn
        )
          ? (
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
            )
          : null
      }

    </>
  )
}

export default App
