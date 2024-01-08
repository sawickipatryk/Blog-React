import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const PageAdminBlogsEdit = (props) => {
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
      PageAdminBlogsEdit
    </Box>
  )
}

PageAdminBlogsEdit.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogsEdit
