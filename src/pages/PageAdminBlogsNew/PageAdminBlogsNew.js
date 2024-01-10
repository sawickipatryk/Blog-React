import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useDispatch } from 'react-redux'

import { createActionSetPosts } from '../../state/posts'
import { createActionSetInfo } from '../../state/loaders'

import { useNavigate } from 'react-router-dom'

import { createPost } from '../../api/Ourposts/create'

import { handleAsyncAction } from '../../handleAsyncAction'
import { getAll } from '../../api/Ourposts/getAll'

import { useForm, FormProvider } from 'react-hook-form'
import BlogForm from '../../components/BlogForm/BlogForm'

export const PageAdminBlogsNew = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()
  const dispatch = useDispatch()

  const {
    handleSubmit,
    reset
  } = methods

  const navigate = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const onClickAdd = (post) => {
    console.log(post)
    const newPost = {
      title: post.title,
      image: post.image,
      author: post.author,
      text: post.text,
      date: `${post.date?.$D}/${post.date?.$M < 10 ? `0${post.date?.$M + 1}` : `${post.date?.$M + 1}`}/${post.date?.$y}`
    }

    handleAsyncAction(async () => {
      await createPost(newPost)
      const posts = await getAll()
      dispatch(createActionSetInfo('Blog was added!'))
      dispatch(createActionSetPosts(posts))
      navigate('/')
    })
    reset()
  }

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
          onSubmit= {handleSubmit((data) => { onClickAdd(data) })}
        />
      </FormProvider>

    </Box>
  )
}

PageAdminBlogsNew.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogsNew
