import React from 'react'
import PropTypes from 'prop-types'

import { Box, TextField, Button, Container } from '@mui/material'

import dayjs from 'dayjs'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { useFormContext, Controller } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import theme from '../../theme'

const today = dayjs()

export const BlogForm = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const methods = useFormContext()
  const { register, control, formState: { errors } } = methods

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
          label={'Author'}
        />
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

        <TextField
          {...register('img', {
            required: {
              value: true,
              message: 'Img is required'
            }
          })}
          error={Boolean(errors.author)}
          helperText={errors.author && errors.author.message}
          size={'small'}
          margin={'dense'}
          fullWidth
          InputLabelProps={{
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
          label={'Img'}
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
