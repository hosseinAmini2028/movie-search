'use client';
import { selectFavs, useSelector } from '@/lib/store';
import { Container, Grid, Typography } from '@mui/material';
import ClientOnlyComponent from '../ClientOnlyComponent';
import MovieCart from '../MovieCart';

export default function FavsList() {
  const items = useSelector(selectFavs);
  return (
    <Container maxWidth={'lg'}>
      <div className="mt-8" />
      <Grid container spacing={1}>
        <ClientOnlyComponent>
          {items.length ? (
            items?.map((i) => (
              <Grid key={i.imdbID} xs={12} sm={6} md={4} lg={3} item>
                <MovieCart {...i} />
              </Grid>
            ))
          ) : (
            <Grid>
              <Typography>NO Item Found</Typography>
            </Grid>
          )}
        </ClientOnlyComponent>
      </Grid>
    </Container>
  );
}
