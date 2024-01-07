import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, Button } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import theme from '../../theme'

export const Message = (props) => {
  const {
    sx,
    message,
    buttonLabel = 'GO BACK',
    iconVariant = 'info',
    onButtonClick,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999999,
        backgroundColor: 'rgba(1,1,1,0.7)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...otherProps}
    >
      <Box
        sx={{
          padding: '40px',
          borderRadius: '5px',
          backgroundColor: 'white',
          textAlign: 'center'
        }}
      >
        {
          iconVariant === 'info'
            ? <InfoOutlinedIcon
                sx={{
                  fontSize: '100px'
                }}
              />
            : iconVariant === 'error'
              ? <ErrorOutlineIcon
                  sx={{
                    fontSize: '100px'
                  }}
                />
              : null
        }
        <Typography
          fontWeight={theme.typography.fontWeightBold}
          variant={'h4'}
          sx={{
            color: 'black',
            marginBottom: '15px'
          }}
        >
          {message}
        </Typography>
        <Button
          variant={'contained'}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  )
}

Message.propTypes = {
  sx: PropTypes.object,
  message: PropTypes.string,
  buttonLabel: PropTypes.string,
  iconVariant: PropTypes.oneOf(['error', 'info']),
  onButtonClick: PropTypes.func.isRequired
}

export default Message
