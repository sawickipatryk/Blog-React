import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { useForm, FormProvider } from 'react-hook-form'
import BlogForm from '../../components/BlogForm/BlogForm'

export const PageAdminBlogsNew = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useForm()

  const {
    handleSubmit
  } = methods

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
          onSubmit= {handleSubmit(console.log, console.log)}
        />
      </FormProvider>

    </Box>
  )
}

PageAdminBlogsNew.propTypes = {
  sx: PropTypes.object
}

export default PageAdminBlogsNew
