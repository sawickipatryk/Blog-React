import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'
import BlogLayout from '../../layouts/BlogLayout/BlogLayout'

import { useParams } from 'react-router-dom'

import { handleAsyncAction } from '../../handleAsyncAction'

import { getOne } from '../../api/Ourposts/getOne'

import { useDispatch, useSelector } from 'react-redux'

import { createActionSetPost } from '../../state/post'

export const BlogPage = (props) => {
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
        ...sx
      }}
      {...otherProps}
    >
      <BlogLayout
        data={data}
      />
    </Box>
  )
}

BlogPage.propTypes = {
  sx: PropTypes.object
}

export default BlogPage
