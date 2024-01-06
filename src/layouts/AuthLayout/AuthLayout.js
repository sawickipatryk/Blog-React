import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const AuthLayout = (props) => {
  const {
    sx,
    mainContent,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      {...otherProps}
    >
      {mainContent}
    </Box>
  )
}

AuthLayout.propTypes = {
  sx: PropTypes.object,
  mainContent: PropTypes.node
}

export default AuthLayout
