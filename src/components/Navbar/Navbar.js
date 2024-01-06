import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
  Avatar
} from '@mui/material'

import theme from '../../theme'

import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'

const pages = [
  {
    id: 1,
    name: 'BLOG',
    href: '#home'
  },
  {
    id: 2,
    name: 'ABOUT ME',
    href: '#about'
  }
]
const settings = [
  {
    id: 1,
    name: 'Logout'

  }
]

export const Navbar = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <AppBar
        {...otherProps}
        position={'static'}
        sx={{
          backgroundColor: theme.palette.background.navBarBackgroundColor
        }}
      >
        <Container maxWidth={'lg'}>
          <Toolbar disableGutters>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '5px',
                flexGrow: 1
              }}
            >
              <AdbIcon
                sx={{
                  color: theme.palette.primary.main
                }}
                fontSize={'large'}
              />
              <Typography
                variant={'h4'}
                noWrap
                component={'a'}
                href={'/'}
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontWeight: theme.typography.fontWeightBold
                }}
              >
                LOGO
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  href={page.href}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    p: 3,
                    display: 'block',
                    '&:hover': {
                      color: '#fff'
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1
              }}
            >
              <IconButton
                size={'large'}
                aria-label={'menu'}
                aria-controls={'menu-appbar'}
                aria-haspopup={'true'}
                onClick={handleOpenNavMenu}
              >
                <MenuIcon
                  fontSize={'large'}
                  sx={{
                    color: theme.palette.primary.main
                  }}
                />
              </IconButton>
              <Menu
                id={'menu-appbar'}
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiMenu-paper': {
                    width: '100%',
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.background.navBarBackgroundColor
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    component={'a'}
                    href={page.href}
                    sx={{
                      padding: '12px 16px'
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign={'center'}>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                gap: '5px',
                flexGrow: 1
              }}
            >
              <AdbIcon
                sx={{
                  color: theme.palette.primary.main
                }}
                fontSize={'large'}
              />
              <Typography
                variant={'h4'}
                noWrap
                component={'a'}
                href={'/'}
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontWeight: theme.typography.fontWeightBold
                }}
              >
                LOGO
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={'Open settings'}>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt={'Remy Sharp'}
                    src={'/static/images/avatar/2.jpg'}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: '45px',
                  '& .MuiMenu-paper': {
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.background.navBarBackgroundColor
                  }
                }}
                id={'menu-appbar'}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.id}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign={'center'}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

Navbar.propTypes = {
  sx: PropTypes.object
}

export default Navbar
