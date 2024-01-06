import React from 'react'
import PropTypes from 'prop-types'

import { auth } from '../../firebase'

import { onAuthStateChanged, signOut } from 'firebase/auth'

import { Box } from '@mui/material'

export const AuthDetails = (props) => {
  const [authUser, setAuthUser] = React.useState(null)
  const {
    sx,
    ...otherProps
  } = props

  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('sign out successfull')
    }).catch(error => console.log(error))
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

AuthDetails.propTypes = {
  sx: PropTypes.object
}

export default AuthDetails
