import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const PageAdminBlogsNew = (props) => {
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
      PageAdminBlogsNew
    </Box>
  )
}

PageAdminBlogsNew.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogsNew
