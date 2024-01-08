import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { useForm, FormProvider } from 'react-hook-form'

import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../firebase'

import AuthLayout from '../../layouts/AuthLayout'
import SignInForm from '../../components/SignInForm'

import { useDispatch } from 'react-redux'

import {
  createActionSetError,
  createActionSetInfo
} from '../../state/loaders'

export const SignIn = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const methods = useForm()
  const { handleSubmit } = methods

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(createActionSetInfo('You are logged in!'))
        navigate('/')
      }).catch((error) => {
        const errorMessage = error.message === 'Firebase: Error (auth/invalid-credential).'
          ? error.message = 'Wrong Email or Password'
          : error.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'
            ? error.message = 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'
            : error.message
        dispatch(createActionSetError(errorMessage))
      })
  }

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <AuthLayout
        mainContent={
          <FormProvider
            {...methods}
          >
            <SignInForm onSubmit={handleSubmit((data) => signIn(data.email, data.password))} />
          </FormProvider>
      }
      />
    </Box>
  )
}

SignIn.propTypes = {
  sx: PropTypes.object
}

export default SignIn
