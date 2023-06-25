import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ListItem from '../components/ListItem';
import Skeletons from './Skeletons';
import Paginator from './Paginator';

function List({ category, parent }) {
  const [data, setData] = useState(null);
  const [pageQty, setPageQty] = useState(0);
  const [page, setPage] = useState(1);
  const BASE_URL = `${category}?page=${page}`;
  useEffect(() => {
    fetch(category)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        return data;
      })
      .then((result) => setPageQty(Math.round(result.count / 10)));

    const sideBar = document.querySelector('.sideBar');

    sideBar.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        setData(null);
        setPageQty(null);
        setPage(1);
      }
    });
  }, [category]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [page, BASE_URL]);

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ height: { md: 'calc(100vh - 99px)' } }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
            {data &&
              data.map((el, i) => (
                <ListItem
                  id={i + 1}
                  data={el}
                  key={el.name || el.title}
                  parent={parent}
                />
              ))}
            <Skeletons count={16} data={data} />
          </Grid>
        </Grid>
        {!(pageQty === 1 || !pageQty) && (
          <Paginator
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
          />
        )}
      </Grid>
    </>
  );
}

export default List;
