import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'

import AuthLayout from '../../layouts/AuthLayout'
import SignUpForm from '../../components/SignUpForm'

export const SignUp = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

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
              onSubmit= {handleSubmit((data) => console.log(data))}
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
