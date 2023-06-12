import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Home from './pages/Home';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setData(usefulData);
        return usefulData;
      })
      .then((datas) => {
        setData(Object.entries(datas));
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar datas={data} />
          <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
              {data.map((el, i) => (
                <Route
                  path={el[0]}
                  element={<List category={el[1]} />}
                  key={el[0]}
                />
              ))}
            </Route>
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
