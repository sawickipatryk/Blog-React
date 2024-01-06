import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const Navbar = (props) => {
  const {
    sx,
    ...otherProps
  } = props

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

Navbar.propTypes = {
  sx: PropTypes.object
}

export default Navbar
