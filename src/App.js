import React from 'react'

import MainPage from './pages/MainPage/MainPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { auth } from './firebase'

import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { useDispatch, useSelector } from 'react-redux'

import { createActionSetPosts } from './state/posts'

import { getAll as getPosts } from './api/Ourposts/getAll'

import {
  createActionSetIsUserLoggedId,
  createActionSetUserId,
  createActionSetUserDisplayName,
  createActionSetUserEmail,
  createActionSetUserAvatar,
  createActionRemoveIsUserLoggedId,
  createActionSetUserIsAdmin,
  createActionRemoveUserIsAdmin
} from './state/auth'

import handleAsyncAction from './handleAsyncAction'
import Message from './components/Message'
import { Typography, Box } from '@mui/material'
import { createActionRemoveInfo, createActionRemoveError } from './state/loaders'

function App () {
  const dispatch = useDispatch()

  const {
    isLoading,
    isInfoDisplayed,
    infoMessage,
    hasError,
    errorMessage
  } = useSelector((state) => state.loaders)
  const {
    isUserLoggedIn,
    isAdmin

  } = useSelector((state) => state.auth)

  const [posts, setPosts] = React.useState([])

  const dismissMessage = React.useCallback(() => {
    dispatch(createActionRemoveInfo())
    dispatch(createActionRemoveError())
    window.scrollTo(0, 0)
  }, [dispatch])

  console.log(isAdmin)

  React.useEffect(() => {
    handleAsyncAction(async () => {
      // eslint-disable-next-line no-unused-vars
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(createActionSetIsUserLoggedId())
          dispatch(createActionSetUserId(user.uid))
          dispatch(createActionSetUserDisplayName(user.displayName && user.displayName))
          dispatch(createActionSetUserEmail(user.email && user.email))
          dispatch(createActionSetUserAvatar(user.photoURL && user.photoURL))
          dispatch(createActionSetUserIsAdmin())
        } else {
          dispatch(createActionRemoveIsUserLoggedId())
          dispatch(createActionRemoveUserIsAdmin())
        }
      })
      const posts = await getPosts()
      setPosts(posts)
      dispatch(createActionSetPosts(posts))
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
        isInfoDisplayed
      )
        ? (
          <Message
            message={infoMessage}
            onButtonClick={dismissMessage}
            iconVariant={'info'}
          />
          )
        : null
      }
      {
      (
        hasError
      )
        ? (
          <Message
            message={errorMessage}
            onButtonClick={dismissMessage}
            iconVariant={'error'}
          />

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
                  <MainPage
                    posts={posts}
                  />
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
                  <MainPage
                    posts={posts}
                  />
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
