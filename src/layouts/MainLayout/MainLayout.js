import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import NavBar from '../../components/Navbar'

export const MainLayout = (props) => {
  const {
    sx,
    mainContent,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <NavBar/>
      {mainContent}
    </Box>
  )
}

MainLayout.propTypes = {
  sx: PropTypes.object,
  mainContent: PropTypes.node

}

export default MainLayout
