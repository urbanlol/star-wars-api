import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Paper, Skeleton } from '@mui/material';
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import rand from '../modules/rand';

const featuring = [
  'gender',
  'birth_year',
  'skin_color',
  'eye_color',
  'population',
  'terrain',
  'rotation_period',
  'climate',
  'director',
  'producer',
  'release_date',
  'language',
  'hair_colors',
  'eye_colors',
  'classification',
  'model',
  'cost_in_credits',
  'passengers',
  'vehicle_class',
  'length',
  'starship_class',
];

function ListItemSingle({ category }) {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState([]);

  const useStyles = makeStyles((theme) => ({
    skeletonTitle: {
      maxWidth: '340px',
      fontSize: '1.8rem',
      margin: '0 auto',
      backgroundColor: '#b6cce2 !important',
    },
    skeletonItem: {
      maxWidth: '992px',
      marginBottom: '13px',
      backgroundColor: '#b6cce2 !important',
      '&:last-child': {
        marginBottom: '0px',
      },
    },
  }));

  const classes = useStyles();

  const fetchData = async () => {
    const response = await fetch(category);
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        const result = data.results;

        return result;
      })
      .then((result) => result.find((_, i) => +i === name - 1))
      .then((data) => {
        setData(data);

        return data;
      })
      .then((data) => {
        setNewData(Object.entries(data));
      });
  }, [name]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {!!(data?.name || data?.title) && (
        <Typography component="h1" variant="h3" mb={2} sx={{ width: '100%' }}>
          {data?.name || data?.title}
        </Typography>
      )}
      <TableContainer component={Paper} sx={{ maxWidth: '992px' }}>
        <Table aria-label="simple table">
          <TableBody>
            {newData.map((data) => {
              if (!featuring.includes(data[0])) return null;

              return (
                <TableRow key={rand(10000)}>
                  <TableCell sx={{ width: '50%' }}>
                    <b>
                      {`${data[0].charAt(0).toUpperCase()}${data[0]
                        .replace(/_/gi, ' ')
                        .slice(1)}`}
                    </b>
                  </TableCell>
                  <TableCell sx={{ width: '50%' }}>{`${data[1]
                    .charAt(0)
                    .toUpperCase()}${data[1].slice(1)}`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!data && (
        <>
          <Typography component="h1" variant="h3" mb={2} sx={{ width: '100%' }}>
            <Skeleton variant="text" className={classes.skeletonTitle} />
          </Typography>
          <Skeleton
            variant="rounded"
            className={classes.skeletonItem}
            width="100%"
            height={52}
          />
          <Skeleton
            variant="rounded"
            className={classes.skeletonItem}
            width="100%"
            height={52}
          />
          <Skeleton
            variant="rounded"
            className={classes.skeletonItem}
            width="100%"
            height={52}
          />
        </>
      )}
    </Box>
  );
}

export default ListItemSingle;
