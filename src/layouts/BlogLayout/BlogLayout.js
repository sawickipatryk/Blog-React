import React from 'react'
import PropTypes from 'prop-types'

import { Box, Container, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'

import theme from '../../theme'

export const BlogLayout = (props) => {
  const {
    sx,
    data,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        paddingBottom: '40px'
      }}
      {...otherProps}
    >
      <Navbar/>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${data && data.image})`,
          width: '100%',
          height: '80vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
      </Box>
      <Container
        sx={{
          padding: '20px 10px',
          position: 'relative',
          marginTop: '-60px',
          backgroundColor: 'white',
          [theme.breakpoints.up('md')]: {
            boxShadow: '1px 5px 10px rgba(1,1,1,1)',
            padding: '20px 10px'
          }

        }}
        maxWidth={'lg'}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px'
          }}
        >
          <Typography
            variant={'body2'}
            sx={{
              marginBottom: '10px'
            }}
          >
            {data && data.author}
          </Typography>
          <Typography
            variant={'body2'}
            sx={{
              marginBottom: '10px'
            }}
          >
            {data && data.date}
          </Typography>
        </Box>
        <Typography
          variant={'h3'}
          fontWeight={theme.typography.fontWeightBold}
          sx={{
            marginBottom: '20px'
          }}
        >
          {data && data.title}
        </Typography>
        <Typography
          variant={'body1'}
          sx={{
            marginBottom: '20px'
          }}
        >
          {data && data.text}
        </Typography>
      </Container>
    </Box>
  )
}

BlogLayout.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.object
}

export default BlogLayout
