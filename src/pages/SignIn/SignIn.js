import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../firebase'

import AuthLayout from '../../layouts/AuthLayout'
import SignInForm from '../../components/SignInForm'

export const SignIn = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error)
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
