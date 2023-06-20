import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ListItem from '../components/ListItem';
import Skeletons from './Skeletons';

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

  return (
    <>
      <Grid container spacing={2} justifyContent='center'>
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
    </>
  );
}

export default List;
