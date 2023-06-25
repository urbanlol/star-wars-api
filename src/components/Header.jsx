import {
  Container,
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import MenuIcon from '@material-ui/icons/Menu';

const toggleBurger = (e) => {
  const sideBar = document.querySelector('.sideBar');
  const mainContainer = document.querySelector('.mainContainer');

  if (!!e.currentTarget) {
    sideBar.classList.toggle('block');
    mainContainer.classList.toggle('mainWidth');
    sideBar.addEventListener('click', (e) => {
      const sideBarTarget = e.target;
      if (
        (sideBarTarget.nodeName === 'BUTTON' && window.innerWidth <= 900) ||
        sideBarTarget.classList.contains('link-to-home')
      ) {
        sideBar.classList.remove('block');
        mainContainer.classList.remove('mainWidth');
      }
    });
  }
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: 0,
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
}));

function Header({ onChange, search }) {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Box component="nav">
        <Container>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={toggleBurger}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1,
                fontSize: { xs: '0.8rem', sm: '1.3rem' },
              }}
            >
              What are you searching?
            </Typography>
            <Search onChange={onChange} search={search} />
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}

export default Header;
