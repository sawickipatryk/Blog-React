import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../firebase'

import AuthLayout from '../../layouts/AuthLayout'
import SignUpForm from '../../components/SignUpForm'

export const SignUp = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
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
            <SignUpForm
              onSubmit= {handleSubmit((data) => signUp(data.email, data.password))}
            />
          </FormProvider>
    }
      />
    </Box>
  )
}

SignUp.propTypes = {
  sx: PropTypes.object
}

export default SignUp
