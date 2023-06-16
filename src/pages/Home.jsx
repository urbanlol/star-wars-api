import { Box, Grid, Typography } from '@mui/material';
import starWarsImg from '../images/starwars.png';
import starWarsImgWp from '../images/webp/starwars.webp';
import styles from '../pages/Home.module.css';

function Home() {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Typography variant="h1" className={styles.homepageTitle}>
            Swapi
          </Typography>
          <span>practice</span>
          <picture>
            <source srcSet={starWarsImgWp} />
            <source srcSet={starWarsImg} />
            <img src={starWarsImgWp} alt="swapi" loading="lazy" width="100%" />
          </picture>
          <br />
          <p className={styles.homepageDescription}>
            hey! how you can see, i tried work with <a href="https://swapi.dev/" target='_blank' rel="noreferrer">swapi</a> here. that was
            difficult for my understanding, but i was able ... i think, i was
            able. so, go ahead! click something, please!
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
