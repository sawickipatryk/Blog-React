import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Typography, Container } from '@mui/material'
import theme from '../../theme'

export const OurPosts = (props) => {
  const {
    sx,
    posts,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        height: '100vh',
        marginTop: '-90px'
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
          posts && posts.firstArray
            .map((post) => {
              return (
                <Grid
                  key={post.id}
                  item
                >
                  <Box
                    sx={{
                      position: 'relative',
                      backgroundImage: `url(${post.img})`,
                      height: '280px',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '10px'

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
                        {post.tilte}
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
                          {post.NewDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )
            })
        }
        </Grid>
        <Typography
          fontWeight={theme.typography.fontWeightBold}
          sx={{
            marginBottom: '15px'
          }}
          variant={'h5'}
        >MORE FROM US
        </Typography>
        <Grid
          spacing={{ xs: 2, md: 2 }}
          container
        >
          {
           posts && posts.secondArray.map((post) => {
             return (
               <Grid
                 key={post.id}
                 item
                 xs={12}
                 sm={6}
                 md={4}
               >
                 <Box
                   color={'black'}
                   sx={{
                     display: 'flex'
                   }}
                 >
                   <Box
                     sx={{
                       width: '150px'
                     }}
                   >
                     <img
                       src={post.img}
                       alt={'something'}
                       style={{
                         height: '100%',
                         objectFit: 'cover'
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
                       {post.tilte}
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
                         {post.NewDate}
                       </Typography>
                     </Box>
                   </Box>
                 </Box>
               </Grid>
             )
           })
        }
        </Grid>
      </Container>
    </Box>
  )
}

OurPosts.propTypes = {
  sx: PropTypes.object,
  slicedArray: PropTypes.object,
  posts: PropTypes.object

}

export default OurPosts
