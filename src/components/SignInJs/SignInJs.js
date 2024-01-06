import React from 'react'
import PropTypes from 'prop-types'
import { auth } from '../../firebase'

import { Box } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const SignInJs = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
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

SignInJs.propTypes = {
  sx: PropTypes.object
}

export default SignInJs
