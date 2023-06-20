import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { useState, useEffect, Fragment } from 'react';
import rand from './modules/rand';
import MainLayout from './layouts/MainLayout';
import Sidebar from './components/Sidebar';
import List from './components/List';
import ListItemSingle from './components/ListItemSingle';
import Home from './pages/Home';
import './App.css';
import SearchPage from './pages/SearchPage';

function App() {
  const url = 'https://swapi.dev/api/';
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((usefulData) => {
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
            <Route path="/" element={<MainLayout  searchData={search} setSearch={setSearch}/>}>
              <Route index element={<Home />} />
              <Route path="search-results" element={<SearchPage datas={data} searchData={search}/>} />
              {data.map((el, i) => (
                <Fragment key={rand(10000)}>
                  <Route
                    path={el[0]}
                    element={<List category={el[1]} parent={el[0]} />}
                  />
                  <Route
                    path={`${el[0]}/:name`}
                    element={<ListItemSingle category={el[1]} parent={el[0]} />}
                  />
                </Fragment>
              ))}
            </Route>
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
