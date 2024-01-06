import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, Container } from '@mui/material'

import MainLayout from '../../layouts/MainLayout'
import Hero from '../../components/Hero'
import OurPosts from '../../components/OurPosts'

import hero from './hero.jpg'
import theme from '../../theme'

const string = 'Have good food and good taste then enjoy reading'

const sliceString = (string) => {
  const arrayOfWords = string.split(' ')

  const upperCase = arrayOfWords.map((string) => {
    const result = string.charAt(0).toUpperCase() + string.slice(1)
    return result
  })

  const firstFourWords = upperCase.slice(0, 4)
  const secondThreeWords = upperCase.slice(4, 7)
  const lastTwoWords = upperCase.slice(7)

  const firstFourWordsString = firstFourWords.join(' ')
  const secondThreeWordsString = secondThreeWords.join(' ')
  const lastTwoWordsString = lastTwoWords.join(' ')

  return {
    firstFourWordsString,
    secondThreeWordsString,
    lastTwoWordsString
  }
}

export const MainPage = (props) => {
  const {
    sx,
    children,
    ...otherProps
  } = props

  const slicedString = sliceString(string)

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <MainLayout
        mainContent={
          <>
            <Hero
              content={
                <>
                  <Box
                    sx={{
                      position: 'relative',
                      backgroundImage: `url(${hero})`,
                      width: '100%',
                      height: '80vh',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Container
                      maxWidth={'lg'}
                    >
                      <Box
                        sx={{
                          maxWidth: '500px'
                        }}
                      >
                        <Typography
                          fontWeight={theme.typography.fontWeightMedium}
                          variant={'h1'}
                          sx={{
                            padding: '0px 10px',
                            backgroundColor: 'white',
                            border: '2px solid black',
                            display: 'inline-block'
                          }}
                        >
                          {slicedString.firstFourWordsString}
                        </Typography>
                        <Typography
                          fontWeight={theme.typography.fontWeightMedium}
                          variant={'h1'}
                          sx={{
                            padding: '0px 10px',
                            backgroundColor: 'white',
                            border: '2px solid black',
                            display: 'inline-block'
                          }}
                        >
                          {slicedString.secondThreeWordsString}
                        </Typography>
                        <Typography
                          fontWeight={theme.typography.fontWeightMedium}
                          variant={'h1'}
                          sx={{
                            padding: '0px 10px',
                            backgroundColor: 'white',
                            border: '2px solid black',
                            display: 'inline-block'
                          }}
                        >
                          {slicedString.lastTwoWordsString}
                        </Typography>
                      </Box>

                    </Container>

                  </Box>
                  <OurPosts/>
                </>
                }
            />
          </>
      }
      />
    </Box>
  )
}

MainPage.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node
}

export default MainPage
