import { Box, Paper, Typography, Button, ButtonGroup } from '@mui/material';

function Sidebar() {
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
              p: '15px',
              fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
              textTransform: 'uppercase',
            }}
          >
            Swapi
          </Typography>
        </Box>
      </Paper>
      <ButtonGroup
        sx={{ width: '100%' }}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <Button key="people">people</Button>
        <Button key="planets">planets</Button>
        <Button key="films">films</Button>
      </ButtonGroup>
    </Box>
  );
}

export default Sidebar;
