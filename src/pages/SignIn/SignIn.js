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
        dispatch(createActionSetError(error))
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
