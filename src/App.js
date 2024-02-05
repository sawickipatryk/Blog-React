/* eslint-disable no-unused-vars */
import React from 'react'

import MainPage from './pages/MainPage/MainPage'
import BlogPage from './pages/BlogPage/BlogPage'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import PageAdminMain from './pages/PageAdminMain/PageAdminMain'
import PageAdminBlogs from './pages/PageAdminBlogs/PageAdminBlogs'
import PageAdminBlogsNew from './pages/PageAdminBlogsNew/PageAdminBlogsNew'
import PageAdminBlogsEdit from './pages/PageAdminBlogsEdit/PageAdminBlogsEdit'

import { auth } from './firebase'

import { onAuthStateChanged } from 'firebase/auth'

import { isAdmin as checkIsAdmin } from './api/admins/isAdmin'

import { Routes, Route } from 'react-router-dom'

import { AuthDetails } from './components/AuthDetails'

import { useDispatch, useSelector } from 'react-redux'

import handleAsyncAction from './handleAsyncAction'
import Message from './components/Message'
import { Box } from '@mui/material'
import { createActionRemoveInfo, createActionRemoveError } from './state/loaders'
import Loader from './components/Loader/Loader'

import { createActionSetPosts } from './state/posts'

import { getAll as getPosts } from './api/Ourposts/getAll'

import {
  createActionSetUserIsAdmin,
  createActionSetIsUserLoggedId,
  createActionSetUserId,
  createActionSetUserDisplayName,
  createActionSetUserEmail,
  createActionSetUserAvatar,
  createActionRemoveIsUserLoggedId
} from './state/auth'

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
    isAdmin,
    userId
  } = useSelector((state) => state.auth)

  const dismissMessage = React.useCallback(() => {
    dispatch(createActionRemoveInfo())
    dispatch(createActionRemoveError())
    window.scrollTo(0, 0)
  }, [dispatch])

  const fetchData = React.useCallback(() => {
    handleAsyncAction(async () => {
      const listen = onAuthStateChanged(auth, async (user) => {
        if (user) {
          dispatch(createActionSetIsUserLoggedId())
          if (user) {
            const isAdmin = await checkIsAdmin(user.uid)
            if (isAdmin) {
              dispatch(createActionSetUserIsAdmin())
            }
          }
          dispatch(createActionSetUserId(user.uid))
          dispatch(createActionSetUserDisplayName(user.displayName && user.displayName))
          dispatch(createActionSetUserEmail(user.email && user.email))
          dispatch(createActionSetUserAvatar(user.photoURL && user.photoURL))
        } else {
          dispatch(createActionRemoveIsUserLoggedId())
        }
      })
      const posts = await getPosts()
      dispatch(createActionSetPosts(posts))
    })
  }, [dispatch])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

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
              maxHeight: '100vh',
              height: '100vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::-webkit-scrollbar': {
                width: '0.4em'
              }
            }}
          >
            <Loader/>
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
          !isUserLoggedIn
        )
          ? (
            <Routes>
              <Route
                path={'/login'}
                element={<SignIn/>}
              />
              <Route
                path={'/register'}
                element={<SignUp/>}
              />
              <Route
                path={'/blog/:blogId'}
                element={<BlogPage/>}
              />
              <Route
                path={'*'}
                element={<MainPage />}
              />

            </Routes>
            )
          : null
      }
      {
        (
          isUserLoggedIn
        )
          ? (
            <Routes>
              {
                isAdmin
                  ? (
                    <Route
                      path={'/admin'}
                      element={<PageAdminMain/>}
                    >
                      <Route
                        path={'blogs'}
                        element={<PageAdminBlogs/>}
                      />
                      <Route
                        path={'blogs/new'}
                        element={<PageAdminBlogsNew/>}
                      />
                      <Route
                        path={'blogs/edit/:blogId'}
                        element={<PageAdminBlogsEdit/>}
                      />
                    </Route>
                    )
                  : null
              }
              <Route
                path={'/blog/:blogId'}
                element={<BlogPage/>}
              />
              <Route
                path={'*'}
                element={<MainPage/>}
              />
            </Routes>
            )
          : null
      }
    </>
  )
}

export default App
