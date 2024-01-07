import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { useForm, FormProvider } from 'react-hook-form'

import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../firebase'

import AuthLayout from '../../layouts/AuthLayout'
import SignUpForm from '../../components/SignUpForm'

import { useDispatch } from 'react-redux'

import {
  createActionSetError,
  createActionSetInfo
} from '../../state/loaders'

export const SignUp = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const methods = useForm()
  const { handleSubmit } = methods

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(createActionSetInfo('Created Account Sucessfully. You are logged In!'))
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
