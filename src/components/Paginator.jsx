import { Pagination, Stack } from '@mui/material';

function Paginator() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={5}
        color="primary"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  );
}

export default Paginator;
