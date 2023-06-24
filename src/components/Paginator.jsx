import { Grid, Pagination, Stack } from '@mui/material';

function Paginator({count, page, onChange}) {
  return (
    <>
      <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
        <Stack spacing={2}>
          <Pagination
            count={count}
            page={page}
            onChange={onChange}
            color="primary"
            sx={{ display: 'flex', justifyContent: 'center' }}
          />
        </Stack>
      </Grid>
    </>
  );
}

export default Paginator;
