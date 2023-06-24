import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

function ListItem({ id, data, parent }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.name || data.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <NavLink to={`/${parent}/${id}`}>
            <Button size="small">Read More</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ListItem;
