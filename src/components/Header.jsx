import {
  Container,
  Box,
  AppBar,
  Typography,
  InputBase,
  Toolbar,
  IconButton,
} from '@mui/material';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const toggleBurger = (e) => {
  const sideBar = document.querySelector('.sideBar');
  const mainContainer = document.querySelector('.mainContainer');
  if (!!e.currentTarget) {
    sideBar.classList.toggle('block');
    mainContainer.classList.toggle('mainWidth');
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
  search: {
    marginLeft: '13px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '195px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Box component="nav">
        <Container>
          <Toolbar className={classes.toolbar} >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon onClick={toggleBurger}/>
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
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}

export default Header;
