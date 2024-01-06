import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Typography, Container } from '@mui/material'
import { Temporal } from '@js-temporal/polyfill'
import theme from '../../theme'

const postsArray = [
  {
    id: 1,
    tilte: 'Creative photography ideas from smart devices',
    img: 'https://pixabay.com/get/gda63d51bf6cd26fa869c928006af9fb3593fd6acb84ba8ab8ee29a7d43013902b094eb211c6d74ded96161a623c2a0c06031a8332e49f9cd7245a69dce94fe48_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 2,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/g76ad50c9b1c25d1a7ec80f658928b1df12a62d9d63debffea66fae011d0748d857498bf716a0977feb99ab6562f8e33d2acdc7ac773a1217bca22f952f4c93fa_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 3,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/ge12bb0b0fa5e77b53cbb413aba1cbafb4b852642f7ca520d156f71466f84d1a0ab424299bbdc99a9ff8719f8e9bf8de3fa2da4866b9e6c843479221e1d8e9c8a_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  }
]
const secondPostsArray = [
  {
    id: 1,
    tilte: 'Creative photography ideas from smart devices',
    img: 'https://pixabay.com/get/g4320663787ce2f923e1cdceb6c3e0d1f05c342d1c57d0d6df64f2d43c1d7c646fea40ce6f1c97377858503d66a82b1684ea6567841adb86a1cbd97c416bafc61_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 2,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/gfc4c2c355df84237ac4d06d2e90cce0a4e50f69333b03946ed94ab6d3861ba5d4262e416df46e268a7d797343c65d78ecc9edb15d91f679a19d3a8aed4307d28_1280.png',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 3,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/ge12bb0b0fa5e77b53cbb413aba1cbafb4b852642f7ca520d156f71466f84d1a0ab424299bbdc99a9ff8719f8e9bf8de3fa2da4866b9e6c843479221e1d8e9c8a_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 4,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/ge12bb0b0fa5e77b53cbb413aba1cbafb4b852642f7ca520d156f71466f84d1a0ab424299bbdc99a9ff8719f8e9bf8de3fa2da4866b9e6c843479221e1d8e9c8a_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 5,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/gfc4c2c355df84237ac4d06d2e90cce0a4e50f69333b03946ed94ab6d3861ba5d4262e416df46e268a7d797343c65d78ecc9edb15d91f679a19d3a8aed4307d28_1280.png',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  },
  {
    id: 6,
    tilte: 'Have good food and good taste then enjoy reading',
    img: 'https://pixabay.com/get/g4320663787ce2f923e1cdceb6c3e0d1f05c342d1c57d0d6df64f2d43c1d7c646fea40ce6f1c97377858503d66a82b1684ea6567841adb86a1cbd97c416bafc61_1280.jpg',
    author: 'Patryk Sawicki',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero ipsum repellat aliquid enim molestias inventore tenetur at magni asperiores?',
    NewDate: Temporal.Now.plainDateISO().toString()
  }
]

export const OurPosts = (props) => {
  const {
    sx,
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
          postsArray.map((post) => {
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
          secondPostsArray.map((post) => {
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
  sx: PropTypes.object
}

export default OurPosts
