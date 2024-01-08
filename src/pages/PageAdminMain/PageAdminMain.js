import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const PageAdminMain = (props) => {
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
      PageAdminMain
      <Outlet/>
    </Box>
  )
}

PageAdminMain.propTypes = {
  sx: PropTypes.object
}

export default PageAdminMain
