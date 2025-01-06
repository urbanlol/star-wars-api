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
  const swapiData = {
    films: 'https://sw-api.starnavi.io/films/',
    people: 'https://sw-api.starnavi.io/people/',
    planets: 'https://sw-api.starnavi.io/planets/',
    species: 'https://sw-api.starnavi.io/species/',
    starships: 'https://sw-api.starnavi.io/starships/',
    vehicles: 'https://sw-api.starnavi.io/vehicles/',
  };
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    setData(Object.entries(swapiData));
  }, []);
  useEffect(() => {
    data.map((data, i) => {
      fetch(data[1])
        .then((response) => response.json())
        .then((data) =>
          data.results.map((res) => {
            items.push(res);
            setItems(items);

            return items;
          })
        )
        .catch((err) => console.error(`An error occurred: ${err}`));

      return items;
    });
  }, [data, items]);

  return (
    <BrowserRouter>
      <div className="App">
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar datas={data} />
          <Routes>
            <Route
              path="/"
              element={<MainLayout searchData={search} setSearch={setSearch} />}
            >
              <Route index element={<Home />} />
              <Route
                path="search-results"
                element={<SearchPage datas={items} searchData={search} />}
              />
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
