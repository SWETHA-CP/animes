import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s', // Add the transition property for the animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale the card on hover
  },
  background: 'grey', // Set the background color to black
  color: 'white', // Set the text color to white
}));

const About = () => {
  // State to track like button status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  // Effect to change the title color when liked state changes
  useEffect(() => {
    if (liked) {
      document.title = 'Liked!';
    } else {
      document.title = 'Not Liked';
    }
  }, [liked]);

  return (
    <div>
      <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Shin chan</Typography>
              <Typography variant="body1">
                "Shin chan" (クレヨンしんちゃん Kureyon Shinchan), internationally known as Shinchan, is a Japanese manga (comic) and anime (animated television series) written and illustrated by Yoshito Usui. The original comic story was first published in the magazine Weekly Manga Action on 11 April 1990. The series follows the adventures of a five-year old boy named Shinnosuke Nohara known for his famous antics like the naked butt dance and the mister elephant dance. He lives with his parents, his dog, his little sister and his friends in Kasukabe, Saitama Prefecture, Japan. "Shin chan":
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Add more cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4">Food</Typography>
              <Typography variant="body1">
                "Cooking"Cooking has been a popular theme in merchandising and media throughout history. We love our pretend ovens, cooking games, cooking TV shows, cooking movies...pretty much everything except for real cooking! What a chore. Don't worry though, everyone in these cooking anime LOVES cooking so we can just leave it to them. Oh and also listed are anime about food. But everyone loves food. Nothing to be said about that."Cooking":
              </Typography>
              {/* Like button */}
              <IconButton onClick={handleLikeClick}>
                {liked ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
              </IconButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;