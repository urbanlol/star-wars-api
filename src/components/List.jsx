import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ListItem from '../components/ListItem';
import Skeleton from '@mui/material/Skeleton';

function List({ category }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(category)
      .then((response) => response.json())
      .then((data) => setData(data.results));

    const sideBar = document.querySelector('.sideBar');

    sideBar.addEventListener('click', (e) => {
      if(e.target.nodeName === 'BUTTON') {
        setData(null)
      }
    })
  }, [category]);

  const skeletonArr = [];
  for (let i = 0; i <= 11; ++i) skeletonArr.push(i);

  return (
    <>
      <Grid container spacing={2}>
        {data &&
          data.map((el) => <ListItem data={el} key={el.name || el.title} />)}

        {!data &&
          skeletonArr.map((el, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`${el}-${i + 1}`}>
              <Skeleton variant="rectangular" width="100%" height={143} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default List;
