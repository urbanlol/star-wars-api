import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';
import rand from '../modules/rand';

function Skeletons({count, data}) {
  const skeletonArr = [];
  for (let i = 1; i <= count; ++i) skeletonArr.push(i);

  return (
    <>
      {!data &&
        skeletonArr.map(() => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={rand(10000)}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={126}
              bgcolor="#b6cce2"
              sx={{ bgcolor: '#b6cce2' }}
            />
          </Grid>
        ))}
    </>
  );
}

export default Skeletons;
