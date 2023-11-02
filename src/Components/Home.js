import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'dark',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title: 'Shin chan',
      description: 'Shin chan',
      image: 'http://bestanimations.com/Food/FastFood/burger-fries-fast-food-animated-gif-7.gif',
    },
    {
      title: 'Food Vibezz',
      description: 'Best anime ever',
      image: 'https://images.says.com/uploads/story_source/source_image/570709/06ba.gif',
    },
    {
      title: 'Dessert',
      description: 'Best anime ever',
      image: 'http://media.giphy.com/media/wb33MJqJW1gjK/giphy.gif',
    },
    // Add more anime cards here...
  ];

  const randomImages = [
    'https://tse4.mm.bing.net/th?id=OIP.fgJmaPgCk_ovfTXXCYiuuwHaEM&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.s2Qpl5N46iqAwenW0p5Q8AHaGS&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.-NpVbDMefLslGFeQqGB2swHaEy&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.Ozjwgfu3X8x5z0-Fsi25TwHaD8&pid=Api&P=0&h=180',
  ];

  const animeWallpapers = [
    'https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif',
    'https://i.pinimg.com/originals/a1/78/02/a178027ea08900a4de17629e5796b38c.jpg',
    'https://tse3.mm.bing.net/th?id=OIP.tv4oJoF1Je9HYLgm44YJdQHaD3&pid=Api&P=0&h=180',
    'https://i.ytimg.com/vi/XA1w5scRY_M/maxresdefault.jpg',
    'https://wallpapercave.com/wp/wp5408463.png',
    'http://media.giphy.com/media/GJzhIFKsQ4u3K/giphy.gif',
    'https://wallpaperaccess.com/full/679976.jpg',
    'http://clipart-library.com/img/988364.gif',
    'http://media3.giphy.com/media/Xh2NX0GGpSDWU/giphy.gif',
    'http://media.giphy.com/media/1IlzJMFWwnrGw/giphy.gif',
    'https://wallpapercave.com/wp/wp5408465.jpg',
    'https://i.pinimg.com/originals/85/48/78/854878ac6ebe434e862dd1d4c9ec3efa.jpg'
    // Add more anime wallpapers here...
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Food Anime Wallpaper
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  Random Anime Images
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            Food Anime Wallpapers
          </Typography>
          <Grid container spacing={2}>
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Anime Wallpaper ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Wallpaper {index + 1}
                    </Typography>
                    <Typography variant="body2">Beautiful anime wallpaper.</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;