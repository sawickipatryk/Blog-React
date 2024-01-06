import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, TextField, Button } from '@mui/material'
import theme from '../../theme'

export const SignInForm = (props) => {
  const {
    sx,
    onSubmit,
    ...otherProps
  } = props

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
            error={false}
            id={'email'}
            label={'Email'}
            defaultValue={''}
            helperText={''}
            inputProps={{
              style: {
                fontSize: '18px'
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
          />
          <TextField
            error={false}
            type={'password'}
            id={'password'}
            label={'Password'}
            defaultValue={''}
            helperText={''}
            inputProps={{
              style: {
                fontSize: '18px'
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
          />
          <TextField
            error={false}
            type={'password'}
            id={'repeat-password'}
            label={'Repeat Password'}
            defaultValue={''}
            helperText={''}
            inputProps={{
              style: {
                fontSize: '18px'
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: '18px',
                color: theme.palette.primary.main
              }
            }}
          />
        </Box>
        <Button
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
        href={'/login'}
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
  onSubmit: PropTypes.func.isRequired
}

export default SignInForm
