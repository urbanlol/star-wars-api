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
  const [itemList, setItemList] = useState(datas);
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
    setTimeout(() => {
      const filteredItems = filtered(searchData, datas);
      setItemList(filteredItems);
    }, 200);
  }, [searchData, datas]);

  useEffect(() => {
    const table = {};

    setResult(itemList.filter(({ name }) => !table[name] && (table[name] = 1)));
  }, [itemList]);

  return (
    <Grid container spacing={2} justifyContent="center">
      {result &&
        result.map(({ name, title, url }) => (
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
      {result.length !== 0 ? (
        ''
      ) : (
        <Grid item xs={12}>
          <Typography variant="h5" component="div">
            Oops! Something wrong! It's maybe I'm searching or swapi doesn't
            want to answer on your request. Try again, please =)
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default SearchPage;
