import React from 'react'
import PropTypes from 'prop-types'

import { styled, alpha } from '@mui/material/styles'
import {
  Box,
  InputBase
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import tehme from '../../theme'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '100%'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}))

export const SearchInput = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        width: '100%',
        [tehme.breakpoints.up('md')]: {
          width: '300px'
        }
      }}
      {...otherProps}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={'Search…'}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  )
}

SearchInput.propTypes = {
  sx: PropTypes.object
}

export default SearchInput
