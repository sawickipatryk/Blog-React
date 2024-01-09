import React from 'react'
import PropTypes from 'prop-types'

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

import PageAdminMainLayout from '../../layouts/PageAdminMainLayout'

export const PageAdminMain = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <PageAdminMainLayout
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        slotAppBarTitle={'Admin Panel'}
        slotMainContent={<Outlet/>}
        slotDrawerContent={
          <List>
            <ListItem
              disablePadding={true}
            >
              <ListItemButton
                onClick={() => {
                  navigate('blogs')
                  setDrawerOpen(false)
                }
                }
              >
                <ListItemText primary={'Blogs'}/>
              </ListItemButton>
            </ListItem>
          </List>
        }
      />

    </Box>
  )
}

PageAdminMain.propTypes = {
  sx: PropTypes.object
}

export default PageAdminMain
