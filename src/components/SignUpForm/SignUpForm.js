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
    onClickLogin,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    watch,
    formState: { errors }
  } = methods

  const password = watch('password')

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
  const registeredRepeatPasswordProps = register('repeatPassword', {
    required: {
      value: true,
      message: 'password is required'
    },
    minLength: {
      value: 6,
      message: 'Password should have 6 characters'
    },
    validate: (repeatPassword) => repeatPassword === password || 'Reapet password shoud be the same like password'
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
        SIGN UP
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
          <TextField
            error={!!errors.repeatPassword}
            type={'password'}
            id={'repeatPassword'}
            label={'Repeat Password'}
            defaultValue={''}
            helperText={errors.repeatPassword?.message}
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
            {...registeredRepeatPasswordProps}
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
          SIGN UP
        </Button>
      </Box>
      <Button
        onClick={onClickLogin}
        sx={{
          width: '100%',
          color: 'white',
          marginBottom: '10px'
        }}
        variant={'contained'}
      >
        SIGN IN
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
  onClickLogin: PropTypes.func.isRequired
}

export default SignInForm
