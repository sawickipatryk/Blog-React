import React from 'react'
import PropTypes from 'prop-types'

import { Box, Container, Typography } from '@mui/material'

import MainLayout from '../../layouts/MainLayout'
import Hero from '../../components/Hero'
import OurPosts from '../../components/OurPosts'

import theme from '../../theme'

import { useSelector } from 'react-redux'

export const MainPage = (props) => {
  const {
    data
  } = useSelector((state) => state.posts)

  const {
    sx,
    children,
    ...otherProps
  } = props

  const sliceArray = (array) => {
    const reverserArray = array && array.toReversed()

    const firstChunk = 4
    const firstItemOfArray = reverserArray && reverserArray[0]
    const firstArray = reverserArray && reverserArray.slice(1, firstChunk)
    const secondArray = reverserArray && reverserArray.slice(firstChunk, reverserArray.length)

    return {
      firstItemOfArray,
      firstArray,
      secondArray
    }
  }
  const slicedArray = sliceArray(data)

  const sliceString = (array) => {
    const slicedArray = array.firstItemOfArray?.title

    const slicedString = slicedArray && slicedArray.split(' ')

    const upperCase = slicedString && slicedString.map((string) => {
      const result = string.charAt(0).toUpperCase() + string.slice(1)
      return result
    })

    const firstFourWords = upperCase && upperCase.slice(0, 4)
    const secondThreeWords = upperCase && upperCase.slice(4, 7)
    const lastTwoWords = upperCase && upperCase.slice(7)

    const firstFourWordsString = firstFourWords && firstFourWords.join(' ')
    const secondThreeWordsString = secondThreeWords && secondThreeWords.join(' ')
    const lastTwoWordsString = lastTwoWords && lastTwoWords.join(' ')

    return {
      firstFourWordsString,
      secondThreeWordsString,
      lastTwoWordsString
    }
  }

  const readyArraysWithSlicedString = sliceString(slicedArray)

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
                      backgroundImage: `url(${slicedArray.firstItemOfArray?.image})`,
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
                        {
                          readyArraysWithSlicedString?.firstFourWordsString
                            ? (
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
                                {readyArraysWithSlicedString?.firstFourWordsString}
                              </Typography>
                              )
                            : null
                        }
                        {
                          readyArraysWithSlicedString?.secondThreeWordsString
                            ? (
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
                                {readyArraysWithSlicedString?.secondThreeWordsString}
                              </Typography>
                              )
                            : null
                        }
                        {
                          readyArraysWithSlicedString?.lastTwoWordsString
                            ? (
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
                                { readyArraysWithSlicedString?.lastTwoWordsString}
                              </Typography>
                              )
                            : null
                        }

                      </Box>

                    </Container>

                  </Box>
                  <OurPosts
                    posts={slicedArray}
                  />
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
