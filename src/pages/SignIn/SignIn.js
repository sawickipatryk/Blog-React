import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

import AuthLayout from '../../layouts/AuthLayout'
import SignInForm from '../../components/SignInForm'

export const SignIn = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()

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
            <SignInForm />
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
