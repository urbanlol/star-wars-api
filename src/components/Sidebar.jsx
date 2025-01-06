import { NavLink } from 'react-router-dom';
import { Box, Paper, Typography, Button, ButtonGroup } from '@mui/material';
import rand from '../modules/rand';

function Sidebar({ datas }) {
  return (
    <Box
      component="nav"
      className="sideBar"
      sx={{
        display: { xs: 'none', md: 'block' },
        width: { xs: 156, md: 256 },
        flexShrink: { sm: 0 },
        bgcolor: '#081627',
      }}
    >
      <Paper
        sx={{
          borderRadius: '0',
          backgroundColor: '#101f33',
          color: '#f4f4f4',
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{
              p: '17px 15px',
              fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
              textTransform: 'uppercase',
            }}
          >
            <NavLink to="/" className="link-to-home">
              Swapi
            </NavLink>
          </Typography>
        </Box>
      </Paper>
      <ButtonGroup
        sx={{ width: '100%', mt: '25px' }}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {datas.map((data, i) => (
          <NavLink to={`/${data[0]}`} key={rand(10000)}>
            <Button sx={{ width: '100%' }}>{data[0]}</Button>
          </NavLink>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default Sidebar;
