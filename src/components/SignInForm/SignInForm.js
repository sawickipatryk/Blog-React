import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, TextField, Button } from '@mui/material'
import theme from '../../theme'
import { useFormContext } from 'react-hook-form'

import isEmail from 'validator/lib/isEmail'

export const SignInForm = (props) => {
  const {
    sx,
    onSubmit,
    onClickCreateAccount,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    formState: { errors }
  } = methods

  const registeredEmailProps = register('email', {
    required: {
      value: true,
      message: 'email is required'
    },
    validate: (email) => isEmail(email) || 'Wrong Email'
  })
  const registeredPasswordProps = register('password', {
    required: {
      value: true,
      message: 'password is required'
    },
    minLength: {
      value: 6,
      message: 'Password should have 6 characters'
    }
  })

  return (
    <Box
      sx={{
        ...sx

      }}
      {...otherProps}
    >
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '30px'
        }}
        variant={'h1'}
        fontWeight={theme.typography.fontWeightBold}
      >
        SIGN IN
      </Typography>
      <Box
        component={'form'}
        onSubmit={onSubmit}
        sx={{

          '& .MuiTextField-root': {
            marginBottom: 2,
            width: '300px'
          }
        }}
        noValidate
        autoComplete={'off'}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <TextField
            error={!!errors.email}
            id={'email'}
            label={'Email'}
            defaultValue={''}
            helperText={errors.email?.message}
            inputProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
            {...registeredEmailProps}
          />
          <TextField
            error={!!errors.password}
            type={'password'}
            id={'password'}
            label={'Password'}
            defaultValue={''}
            helperText={errors.password?.message}
            inputProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
            {...registeredPasswordProps}
          />
        </Box>
        <Button
          type={'submit'}
          sx={{
            width: '100%',
            color: 'white',
            marginBottom: '10px'
          }}
          variant={'contained'}
        >
          LOGIN
        </Button>
      </Box>
      <Button
        onClick={onClickCreateAccount}
        sx={{
          width: '100%',
          color: 'white',
          marginBottom: '10px'
        }}
        variant={'contained'}
      >
        SIGN UP
      </Button>
      <Button
        href={'/'}
        sx={{
          width: '100%',
          color: 'white'
        }}
        variant={'contained'}
      >
        BACK
      </Button>
    </Box>
  )
}

SignInForm.propTypes = {
  sx: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired
}

export default SignInForm
