/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import { Box, Container, Typography } from '@mui/material'

import MainLayout from '../../layouts/MainLayout'
import Hero from '../../components/Hero'
import OurPosts from '../../components/OurPosts'

import { useNavigate } from 'react-router-dom'

import theme from '../../theme'

import { useSelector } from 'react-redux'

export const MainPage = (props) => {
  const {
    data
  } = useSelector((state) => state.posts)

  // eslint-disable-next-line no-unused-vars
  const [paginationPerPage, setPaginationPerPage] = React.useState(6)
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = React.useState(1)

  const {
    sx,
    children,
    ...otherProps
  } = props

  const navigate = useNavigate()

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

  const numOfTotalPages = Math.ceil(slicedArray.secondArray && slicedArray.secondArray.length / paginationPerPage)

  const indexOfLastTodo = currentPage * paginationPerPage
  const indexOfFirstTodo = indexOfLastTodo - paginationPerPage

  const visibleBlogs = slicedArray && slicedArray.secondArray && slicedArray.secondArray.splice(indexOfFirstTodo, indexOfLastTodo)

  const onChangePagination = (e, p) => {
    setCurrentPage(p)
  }

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
                    onClick={() => { navigate(`/blog/${slicedArray.firstItemOfArray?.id}`) }}
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
                      justifyContent: 'center',
                      cursor: 'pointer'
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
                    visibleBlogs={visibleBlogs}
                    numOfTotalPages={numOfTotalPages}
                    onChangePagination={onChangePagination}
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
