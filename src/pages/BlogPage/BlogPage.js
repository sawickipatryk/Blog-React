import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'

export const BlogPage = (props) => {
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
      <BlogLayout/>
    </Box>
  )
}

BlogPage.propTypes = {
  sx: PropTypes.object
}

export default BlogPage
