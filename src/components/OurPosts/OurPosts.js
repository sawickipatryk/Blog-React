import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Typography, Container, Pagination } from '@mui/material'
import theme from '../../theme'
import SearchInput from '../SearchInput'

import { useNavigate } from 'react-router-dom'

export const OurPosts = (props) => {
  const {
    sx,
    posts,
    visibleBlogs,
    numOfTotalPages,
    onChangePagination,
    setSearchQuery,
    searchQuery,
    ...otherProps
  } = props

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        ...sx,
        marginTop: '-90px',
        paddingBottom: '30px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {
           posts && posts.firstArray && posts.firstArray
             .map((post) => {
               return (
                 <Grid
                   key={post.id}
                   item
                 >
                   <Box
                     onClick={() => { navigate(`/blog/${post?.id}`) }}
                     sx={{
                       position: 'relative',
                       backgroundImage: `url(${post.image})`,
                       height: '280px',
                       backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat',
                       display: 'flex',
                       alignItems: 'flex-end',
                       padding: '10px',
                       minWidth: '370px',
                       cursor: 'pointer'
                     }}
                   >
                     <Box
                       color={'white'}
                     >
                       <Typography
                         variant={'h6'}
                         sx={{
                           maxWidth: '350px'
                         }}
                       >
                         {post.title}
                       </Typography>
                       <Box
                         sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between'
                         }}
                       >
                         <Typography
                           variant={'caption'}
                         >
                           {post.author}
                         </Typography>
                         <Typography
                           variant={'caption'}
                         >
                           {post.date}
                         </Typography>
                       </Box>
                     </Box>
                   </Box>
                 </Grid>
               )
             })
        }
        </Grid>
        <Box
          sx={{
            marginBottom: '20px',
            [theme.breakpoints.up('md')]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }
          }}
        >
          <Typography
            fontWeight={theme.typography.fontWeightBold}
            variant={'h5'}
            sx={{
              marginBottom: '20px',
              [theme.breakpoints.up('md')]: {
                marginBottom: '0px'
              }
            }}
          >MORE FROM US
          </Typography>
          <SearchInput
            setSearchQuery={setSearchQuery}
          />
        </Box>
        <Grid
          spacing={{ xs: 2, md: 2 }}
          container
        >
          {
           visibleBlogs && visibleBlogs.map((post) => {
             return (
               <Grid
                 key={post.id}
                 item
                 xs={12}
                 sm={6}
                 md={4}
               >
                 <Box
                   onClick={() => { navigate(`/blog/${post?.id}`) }}
                   color={'black'}
                   sx={{
                     display: 'flex',
                     cursor: 'pointer'
                   }}
                 >
                   <Box >
                     <img
                       src={post.image}
                       alt={'something'}
                       style={{
                         height: '95px',
                         objectFit: 'cover',
                         width: '108px'
                       }}
                     />
                   </Box>
                   <Box
                     sx={{
                       padding: '0px 10px 30px'
                     }}
                   >
                     <Typography
                       variant={'body2'}
                       fontWeight={theme.typography.fontWeightBold}
                     >
                       {post.title}
                     </Typography>
                     <Box
                       sx={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'space-between',
                         width: '100%'
                       }}
                     >
                       <Typography
                         variant={'caption'}
                       >
                         {post.author}
                       </Typography>
                       <Typography
                         variant={'caption'}
                       >
                         {post.date}
                       </Typography>
                     </Box>
                   </Box>
                 </Box>
               </Grid>
             )
           })
        }
        </Grid>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '30px'
          }}
        >
          <Pagination
            count={numOfTotalPages}
            onChange={onChangePagination}
          />
        </Box>
      </Container>
    </Box>
  )
}

OurPosts.propTypes = {
  sx: PropTypes.object,
  slicedArray: PropTypes.object,
  posts: PropTypes.object,
  visibleBlogs: PropTypes.array,
  numOfTotalPages: PropTypes.number,
  onChangePagination: PropTypes.func,
  setSearchQuery: PropTypes.func,
  searchQuery: PropTypes.string

}

export default OurPosts
