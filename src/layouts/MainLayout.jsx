import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function MainLayout({ search, setSearch }) {
  const navigation = useNavigate();

  const handlerChange = (e) => {
    if (!e.target.value) {
      return navigation('/', { relative: 'path' });
    }
    setSearch(e.target.value);
    navigation('/search-results', { relative: 'path' });
  };
  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box className="mainContainer">
          <Header onChange={handlerChange} search={search} />
          <Box
            component="main"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Container sx={{ mt: '50px' }}>
              <Outlet />
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
