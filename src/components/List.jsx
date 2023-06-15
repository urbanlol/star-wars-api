import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ListItem from '../components/ListItem';
import Skeleton from '@mui/material/Skeleton';
import rand from '../modules/rand';

function List({ category, parent }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(category)
      .then((response) => response.json())
      .then((data) => setData(data.results));

    const sideBar = document.querySelector('.sideBar');

    sideBar.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        setData(null);
      }
    });
  }, [category]);

  const skeletonArr = [];
  for (let i = 0; i <= 11; ++i) skeletonArr.push(i);

  return (
    <>
      <Grid container spacing={2}>
        {data &&
          data.map((el, i) => (
            <ListItem
              id={i + 1}
              data={el}
              key={el.name || el.title}
              parent={parent}
            />
          ))}

        {!data &&
          skeletonArr.map((el, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={rand(10000)}
            >
              <Skeleton variant="rectangular" width="100%" height={126} bgcolor='#b6cce2' sx={{bgcolor: '#b6cce2'}}/>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default List;
