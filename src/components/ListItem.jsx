import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';

function ListItem({data}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{height: '100%'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.name || data.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ListItem;
