import { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import rand from '../modules/rand';

function SearchPage({ datas, searchData }) {
  const [items, setItems] = useState([]);
  const [itemList, setItemList] = useState(items);
  const [result, setResult] = useState([]);

  const filtered = (searchText, list) => {
    if (!searchText) {
      return [];
    }

    return list.filter(({ name, title }) =>
      (!name ? title : name).toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    datas.map((data, i) => {
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
  }, [searchData]);

  useEffect(() => {
    setTimeout(() => {
      const filteredItems = filtered(searchData, items);
      setItemList(filteredItems);
    }, 500);
  }, [searchData]);

  useEffect(() => {
    const table = {};

    setResult(itemList.filter(({ name }) => !table[name] && (table[name] = 1)));
  }, [itemList]);

  return (
    <Grid container spacing={2}>
      {result.map(({ name, title, url }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={rand(10000)}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {name || title}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <NavLink to={url.replace(/https:\/\/swapi.dev\/api/g, '')}>
                <Button size="small">Learn More</Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SearchPage;
