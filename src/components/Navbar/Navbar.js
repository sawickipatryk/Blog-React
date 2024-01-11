import React from 'react'
import PropTypes from 'prop-types'

import { useNavigate, NavLink as RouterNavLink } from 'react-router-dom'

import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

import { useSelector, useDispatch } from 'react-redux'

import {
  createActionRemoveIsUserLoggedId,
  createActionRemoveUserIsAdmin
} from '../../state/auth'

import {
  createActionSetError,
  createActionSetInfo
} from '../../state/loaders'

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
  Tooltip
} from '@mui/material'

import theme from '../../theme'

import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'

const pages = [
  {
    id: 1,
    name: 'BLOG',
    href: '/'
  },
  {
    id: 2,
    name: 'ABOUT ME',
    href: '/about'
  }
]
export const Navbar = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {
    sx,
    ...otherProps
  } = props

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    isUserLoggedIn,
    isAdmin
  } = useSelector((state) => state.auth)

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

  const userSignOut = () => {
    signOut(auth).then(() => {
      dispatch(createActionRemoveIsUserLoggedId())
      dispatch(createActionRemoveUserIsAdmin())
      navigate('/')
      dispatch(createActionSetInfo('You are logged in!'))
    }).catch((error) => {
      dispatch(createActionSetError(error))
    })
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
                isUserLoggedIn
                  ? (
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title={'Open settings'}>
                        <Button
                          onClick={handleOpenUserMenu}
                        >
                          Profile
                        </Button>
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
                        {
                          isAdmin
                            ? (
                              <MenuItem
                                onClick={handleCloseUserMenu}
                              >
                                <RouterNavLink
                                  style={{
                                    textDecoration: 'none'
                                  }}
                                  to={'/admin'}
                                >
                                  <Button
                                    variant={'text'}
                                  >
                                    Panel Admin
                                  </Button>
                                </RouterNavLink>

                              </MenuItem>
                              )
                            : null
                        }
                        <MenuItem
                          onClick={handleCloseUserMenu}
                        >
                          <Button
                            onClick={userSignOut}
                            variant={'text'}
                          >
                            Log out
                          </Button>
                        </MenuItem>
                      </Menu>
                    </Box>
                    )
                  : (
                    <RouterNavLink
                      style={{
                        textDecoration: 'none'
                      }}
                      to={'/login'}
                    >
                      <Button
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
                    </RouterNavLink>
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
                  <RouterNavLink
                    style={{
                      textDecoration: 'none'
                    }}
                    key={page.id}
                    to={page.href}
                  >
                    <Button
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
                  </RouterNavLink>
                ))}
              </Box>
              {
                isUserLoggedIn
                  ? (
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title={'Open settings'}>
                        <Button
                          onClick={handleOpenUserMenu}
                        >
                          Profile
                        </Button>
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
                        {
                          isAdmin
                            ? (
                              <MenuItem
                                onClick={handleCloseUserMenu}
                              >
                                <RouterNavLink
                                  style={{
                                    textDecoration: 'none'
                                  }}
                                  to={'/admin'}
                                >
                                  <Button
                                    variant={'text'}
                                  >
                                    Panel Admin
                                  </Button>
                                </RouterNavLink>
                              </MenuItem>
                              )
                            : null
                        }
                        <MenuItem
                          onClick={handleCloseUserMenu}
                        >
                          <Button
                            onClick={userSignOut}
                            variant={'text'}
                          >
                            Log out
                          </Button>
                        </MenuItem>
                      </Menu>
                    </Box>
                    )
                  : (
                    <RouterNavLink
                      style={{
                        textDecoration: 'none'
                      }}
                      to={'/login'}
                    >
                      <Button
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
                    </RouterNavLink>
                    )
              }
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
