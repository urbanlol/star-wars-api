import { Container, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import List from './components/List';
import Paginator from './components/Paginator';

import './App.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <Box className="mainContainer">
            <Header />
            <Box
              component="main"
              sx={{
                height: { md: 'calc(100vh - 64px)' },
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Container sx={{ mt: '50px' }}>
                <List />
              </Container>
              <Container
                sx={{
                  marginTop: { xs: '25px', md: 0 },
                  marginBottom: '25px',
                  alignSelf: 'end',
                }}
              >
                <Paginator />
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
