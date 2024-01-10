import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import BlogForm from '../../components/BlogForm/BlogForm'

import { useDispatch, useSelector } from 'react-redux'

import { update } from '../../api/Ourposts/update'
import { getAll } from '../../api/Ourposts/getAll'
import { getOne } from '../../api/Ourposts/getOne'

import { useNavigate, useParams } from 'react-router-dom'

import { handleAsyncAction } from '../../handleAsyncAction'

import { createActionSetPosts } from '../../state/posts'
import { createActionSetInfo } from '../../state/loaders'
import { createActionSetPost } from '../../state/post'

export const PageAdminBlogsEdit = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { blogId } = useParams()

  const { data } = useSelector((state) => state.post)

  console.log(data)

  const methods = useForm()
  const {
    handleSubmit,
    reset
  } = methods

  const onClickUpdate = (post) => {
    handleAsyncAction(async () => {
      await update(blogId, post)
      const posts = await getAll()
      dispatch(createActionSetInfo('Blog was updated!'))
      dispatch(createActionSetPosts(posts))
      navigate('/admin/blogs')
    })
  }
  React.useEffect(() => {
    reset(data)
  }, [data, reset])

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
      <FormProvider
        {...methods}
      >
        <BlogForm
          onSubmit= {handleSubmit((data) => { onClickUpdate(data) })}
        />
      </FormProvider>
    </Box>
  )
}

PageAdminBlogsEdit.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogsEdit
