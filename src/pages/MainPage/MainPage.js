import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography, Container } from '@mui/material'

import MainLayout from '../../layouts/MainLayout'
import Hero from '../../components/Hero'
import OurPosts from '../../components/OurPosts'

import theme from '../../theme'

// const sliceString = (string) => {
//   const arrayOfWords = string.split(' ')

//   const upperCase = arrayOfWords.map((string) => {
//     const result = string.charAt(0).toUpperCase() + string.slice(1)
//     return result
//   })

//   const firstFourWords = upperCase.slice(0, 4)
//   const secondThreeWords = upperCase.slice(4, 7)
//   const lastTwoWords = upperCase.slice(7)

//   const firstFourWordsString = firstFourWords.join(' ')
//   const secondThreeWordsString = secondThreeWords.join(' ')
//   const lastTwoWordsString = lastTwoWords.join(' ')

//   return {
//     firstFourWordsString,
//     secondThreeWordsString,
//     lastTwoWordsString
//   }
// }

export const MainPage = (props) => {
  const {
    sx,
    children,
    posts,
    ...otherProps
  } = props

  const sliceArrays = (array) => {
    const firstChunk = 4
    const firstItemOfArray = array[0]
    const firstArray = array.slice(1, firstChunk)
    const secondArray = array.slice(firstChunk, array.length)

    const sliceString = firstItemOfArray?.tilte.split(' ')

    const upperCase = sliceString?.map((string) => {
      const result = string.charAt(0).toUpperCase() + string.slice(1)
      return result
    })

    const firstFourWords = upperCase?.slice(0, 4)
    const secondThreeWords = upperCase?.slice(4, 7)
    const lastTwoWords = upperCase?.slice(7)

    const firstFourWordsString = firstFourWords?.join(' ')
    const secondThreeWordsString = secondThreeWords?.join(' ')
    const lastTwoWordsString = lastTwoWords?.join(' ')

    return {
      firstItemOfArray,
      firstArray,
      secondArray,
      firstFourWordsString,
      secondThreeWordsString,
      lastTwoWordsString
    }
  }
  const slicedArrays = sliceArrays(posts)

  console.log(slicedArrays)

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
                      backgroundImage: `url(${slicedArrays.firstItemOfArray?.img})`,
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
                          slicedArrays?.firstFourWordsString
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
                                {slicedArrays?.firstFourWordsString}
                              </Typography>
                              )
                            : null
                        }
                        {
                          slicedArrays?.secondThreeWordsString
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
                                {slicedArrays?.secondThreeWordsString}
                              </Typography>
                              )
                            : null
                        }
                        {
                          slicedArrays?.lastTwoWordsString
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
                                {slicedArrays?.lastTwoWordsString}
                              </Typography>
                              )
                            : null
                        }

                      </Box>

                    </Container>

                  </Box>
                  <OurPosts
                    posts={
                      slicedArrays
                  }
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
  children: PropTypes.node,
  posts: PropTypes.array
}

export default MainPage
