import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const Hero = (props) => {
  const {
    sx,
    content,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      {content}
    </Box>
  )
}

Hero.propTypes = {
  sx: PropTypes.object,
  content: PropTypes.node
}

export default Hero
