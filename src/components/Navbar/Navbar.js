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

import SearchInput from '../SearchInput'

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
  // eslint-disable-next-line no-unused-vars
  const [isLogged, setIsLogged] = React.useState(false)
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
        position={'fixed'}
        sx={{
          padding: '12px 0px',
          backgroundColor: theme.palette.background.navBarBackgroundColor,
          [theme.breakpoints.up('md')]: {
            padding: '0px 0px 12px 0px'
          }

        }}
      >
        <Container maxWidth={'lg'}>
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            disableGutters
          >
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                width: '100%',
                alignItems: 'center',
                paddingBottom: '10px'
              }}
            >
              <Box
                sx={{
                  flexGrow: 0
                }}
              >
                <IconButton
                  size={'large'}
                  aria-label={'menu'}
                  aria-controls={'menu-appbar'}
                  aria-haspopup={'true'}
                  onClick={handleOpenNavMenu}
                  sx={{
                    padding: 0
                  }}
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  flexGrow: 1,
                  justifyContent: 'center'
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
              </Box> {
                isLogged
                  ? (
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
                    )
                  : (
                    <Button
                      href={'/login'}
                      onClick={handleCloseNavMenu}
                      sx={{
                        flexGrow: 0,
                        display: 'block',
                        '&:hover': {
                          color: '#fff'
                        }
                      }}
                    >
                      Login
                    </Button>
                    )
              }
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                width: '100%',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  flexGrow: 1,
                  gap: '5px'
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
              <Box
                sx={{
                  display: 'flex'
                }}
              >
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
              {
                isLogged
                  ? (
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
                    )
                  : (
                    <Button
                      href={'/login'}
                      onClick={handleCloseNavMenu}
                      sx={{
                        p: 3,
                        display: 'block',
                        '&:hover': {
                          color: '#fff'
                        }
                      }}
                    >
                      Login
                    </Button>
                    )
              }
            </Box>
            <SearchInput/>
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
