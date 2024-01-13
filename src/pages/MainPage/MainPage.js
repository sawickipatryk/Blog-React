import React from 'react'
import PropTypes from 'prop-types'

import { Box, Container, Typography } from '@mui/material'

import MainLayout from '../../layouts/MainLayout'
import Hero from '../../components/Hero'
import OurPosts from '../../components/OurPosts'

import { useNavigate } from 'react-router-dom'

import theme from '../../theme'

import { useSelector, useDispatch } from 'react-redux'

import { createActionSetPosts } from '../../state/posts'

import { getAll as getPosts } from '../../api/Ourposts/getAll'

import { handleAsyncAction } from '../../handleAsyncAction'

export const MainPage = (props) => {
  const {
    data
  } = useSelector((state) => state.posts)

  // eslint-disable-next-line no-unused-vars
  const [paginationPerPage, setPaginationPerPage] = React.useState(6)
  const [currentPage, setCurrentPage] = React.useState(1)

  const [searchQuery, setSearchQuery] = React.useState('')

  const {
    sx,
    children,
    ...otherProps
  } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetchData = React.useCallback(async () => {
    handleAsyncAction(async () => {
      const posts = await getPosts()
      dispatch(createActionSetPosts(posts))
    })
  }, [dispatch])

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

  const indexOfLastBlog = currentPage * paginationPerPage
  const indexOfFirstBlog = indexOfLastBlog - paginationPerPage

  const onChangePagination = (e, p) => {
    setCurrentPage(p)
  }

  const filterData = (query, data) => {
    const queryToLowerCase = query.toLowerCase()
    if (!queryToLowerCase) {
      return data
    } else {
      return data && data.filter((d) => d.title.toLowerCase().includes(queryToLowerCase))
    }
  }

  const dataFiltered = filterData(searchQuery, slicedArray.secondArray)

  const numOfTotalPages = Math.ceil(dataFiltered.length / paginationPerPage)

  const visibleBlogs = dataFiltered.splice(indexOfFirstBlog, indexOfLastBlog)

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

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
                          maxWidth: '700px'
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
                    dataFiltered={visibleBlogs}
                    numOfTotalPages={numOfTotalPages}
                    onChangePagination={onChangePagination}
                    setSearchQuery={setSearchQuery}
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
