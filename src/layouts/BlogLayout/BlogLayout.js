import React from 'react'
import PropTypes from 'prop-types'

import { useParams } from 'react-router-dom'

import { Box, Container, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'

import { handleAsyncAction } from '../../handleAsyncAction'

import { getOne } from '../../api/Ourposts/getOne'

import { useDispatch, useSelector } from 'react-redux'

import { createActionSetPost } from '../../state/post'

import theme from '../../theme'

export const BlogLayout = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const { blogId } = useParams()
  const dispatch = useDispatch()

  const { data } = useSelector((state) => state.post)

  React.useEffect(() => {
    handleAsyncAction(async () => {
      const post = await getOne(blogId)
      dispatch(createActionSetPost(post))
    })
  }, [dispatch, blogId])

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
          padding: '20px 0px',
          position: 'relative',
          marginTop: '-60px',
          backgroundColor: 'white',
          boxShadow: '1px 5px 10px rgba(1,1,1,1)'
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
  sx: PropTypes.object
}

export default BlogLayout
