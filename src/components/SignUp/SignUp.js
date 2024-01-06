import React from 'react'
import PropTypes from 'prop-types'

import { auth } from '../../firebase'

import { Box } from '@mui/material'

import { createUserWithEmailAndPassword } from 'firebase/auth'

export const SignUp = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential)
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

    </Box>
  )
}

SignUp.propTypes = {
  sx: PropTypes.object
}

export default SignUp
