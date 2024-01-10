import React from 'react'
import PropTypes from 'prop-types'

import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  IconButton,
  Container
} from '@mui/material'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import theme from '../../theme'

export const PageAdminBlogs = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const { data } = useSelector((state) => state.posts)

  console.log(data)

  return (
    <Box
      sx={{
        ...sx

      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
        sx={{
          paddingTop: '40px'
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650
            }}
            aria-label={'simple table'}
          >
            <TableHead>
              <TableRow
                sx={{
                  fontWeight: theme.typography.fontWeightBold
                }}
              >
                <TableCell
                  sx={{ color: 'black' }}
                >Title
                </TableCell>
                <TableCell
                  sx={{ color: 'black' }}
                  align={'right'}
                >Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component={'th'}
                    scope={'row'}
                    sx={{
                      color: 'black',
                      fontWeight: theme.typography.fontWeightBold
                    }}
                  >
                    {item.tilte}
                  </TableCell>
                  <TableCell align={'right'}>
                    <IconButton>
                      <EditIcon/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  )
}

PageAdminBlogs.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogs
