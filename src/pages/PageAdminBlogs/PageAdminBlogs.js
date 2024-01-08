import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const PageAdminBlogs = (props) => {
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
      PageAdminBlogs
    </Box>
  )
}

PageAdminBlogs.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogs
