import React from 'react'
import PropTypes from 'prop-types'

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Container
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

export const PageAdminMainLayout = (props) => {
  const {
    sx,
    drawerOpen,
    setDrawerOpen,
    slotAppBarTitle,
    slotDrawerContent,
    slotMainContent,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <AppBar position={'sticky'}>
        <Toolbar>
          <IconButton
            size={'large'}
            edge={'start'}
            color={'inherit'}
            aria-label={'menu'}
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant={'h6'}
            component={'div'}
            sx={{ flexGrow: 1 }}
          >
            {slotAppBarTitle}
          </Typography>
          <Button
            href={'/'}
            color={'inherit'}
          >
            Go Back
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            color: 'black',
            minWidth: '250px'
          }}
        >
          {slotDrawerContent}
        </Box>
      </Drawer>
      <Container
        maxWidth={'lg'}
      >
        {slotMainContent}
      </Container>
    </Box>
  )
}

PageAdminMainLayout.propTypes = {
  sx: PropTypes.object,
  drawerOpen: PropTypes.bool,
  setDrawerOpen: PropTypes.func,
  slotAppBarTitle: PropTypes.node,
  slotDrawerContent: PropTypes.node,
  slotMainContent: PropTypes.node

}

export default PageAdminMainLayout
