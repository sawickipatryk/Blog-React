import React from 'react'
import PropTypes from 'prop-types'

import { Box, TextField, Button, Container, Typography } from '@mui/material'

import dayjs from 'dayjs'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { useFormContext, Controller } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import theme from '../../theme'

import { useLocation } from 'react-router-dom'

const today = dayjs()

export const BlogForm = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useFormContext()
  const { register, control, formState: { errors } } = methods

  const location = useLocation()
  const { pathname } = location

  return (
    <Box
      component={'form'}
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
        sx={{
          marginTop: '40px'
        }}
      >
        {
          (pathname === '/admin/blogs/new')
            ? (
              <Typography
                variant={'h1'}
                sx={{
                  marginBottom: '10px'
                }}
                fontWeight={theme.typography.fontWeightMedium}
              >
                NEW BLOG
              </Typography>
              )
            : (pathname.includes('/admin/blogs/edit/'))
                ? (
                  <Typography
                    variant={'h1'}
                    sx={{
                      marginBottom: '10px'
                    }}
                    fontWeight={theme.typography.fontWeightMedium}
                  >
                    EDIT BLOG
                  </Typography>
                  )
                : null
        }
        <TextField
          {...register('title', {
            required: {
              value: true,
              message: 'Title is required'
            }
          })}
          error={Boolean(errors.title)}
          helperText={errors.title && errors.title.message}
          size={'small'}
          margin={'dense'}
          fullWidth
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          inputProps={{
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          label={'Title'}
        />
        <TextField
          {...register('author', {
            required: {
              value: true,
              message: 'Author is required'
            }
          })}
          error={Boolean(errors.author)}
          helperText={errors.author && errors.author.message}
          size={'small'}
          margin={'dense'}
          fullWidth
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main,
              shrink: false
            }
          }}
          inputProps={{
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          label={'Author'}
        />
        {
          (pathname === '/admin/blogs/new')
            ? (
              <Controller
                control={control}
                name={'date'}
                rules={{
                  required: {
                    value: true,
                    message: 'Date is required'
                  }
                }}
                defaultValue={null}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                  >
                    <DatePicker
                      onChange={onChange}
                      value={value}
                      onError={(newError) => newError}
                      slotProps={{
                        textField: {
                          margin: 'dense',
                          size: 'small',
                          helperText: errors.date && errors.date.message
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-input': {
                          color: 'rgb(198, 151, 73)'
                        },
                        '& .MuiFormHelperText-root': {
                          color: '#d32f2f;'
                        }
                      }}
                      defaultValue={today}
                      disablePast
                      views={['year', 'month', 'day']}
                    />
                  </LocalizationProvider>
                )}
              />
              )
            : null
        }
        <TextField
          {...register('image', {
            required: {
              value: true,
              message: 'Image URL is required'
            }
          })}
          error={Boolean(errors.image)}
          helperText={errors.image && errors.image.message}
          size={'small'}
          margin={'dense'}
          fullWidth
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          inputProps={{
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          label={'Image URL'}
        />
        <TextField
          {...register('text', {
            required: {
              value: true,
              message: 'Text is required'
            }
          })}
          error={Boolean(errors.text)}
          helperText={errors.text && errors.text.message}
          size={'small'}
          margin={'dense'}
          fullWidth
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          inputProps={{
            style: {
              fontSize: '18px',
              color: theme.palette.primary.main
            }
          }}
          label={'Text'}
        />
        <Button
          type={'submit'}
          variant={'contained'}
          sx={{
            width: '100%'
          }}
        >
          ADD
        </Button>
      </Container>
    </Box>
  )
}

BlogForm.propTypes = {
  sx: PropTypes.object
}

export default BlogForm
