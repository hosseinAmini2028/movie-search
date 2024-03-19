'use client';

import { useSearch } from '@/lib/SearchProvider';
import { useGetMoviesQuery } from '@/services/movie';
import { Container, Grid, Typography } from '@mui/material';
import { QueryStatus } from '@reduxjs/toolkit/query';
import Loading from '../Loading';
import MovieCart from '../MovieCart';
import Pagination from '../Pagination';
import SearchInput from '../SearchInput';

export default function MovieList() {
  const { query, page } = useSearch();
  const { data, isLoading, status } = useGetMoviesQuery(query, {
    refetchOnMountOrArgChange: true,
    skip: !query
  });

  const loading = isLoading || status === QueryStatus.pending;
  return (
    <Container maxWidth={'lg'}>
      <SearchInput isLoading={loading} />

      <div className="mt-8" />
      {isLoading || loading ? (
        <Loading />
      ) : (
        <>
          {data?.totalResults && (
            <>
              <Pagination count={data?.totalResults} />
              <div className="mt-8" />
            </>
          )}
          <Grid container spacing={1}>
            {data?.Search?.length ? (
              data?.Search?.map((i) => (
                <Grid key={i.imdbID} xs={12} sm={6} md={4} lg={3} item>
                  <MovieCart {...i} />
                </Grid>
              ))
            ) : (
              <Grid>
                <Typography>NO Item Found</Typography>
              </Grid>
            )}
          </Grid>

          {data?.totalResults && (
            <>
              <div className="my-8" />
              <Pagination count={data?.totalResults} />
            </>
          )}
        </>
      )}
    </Container>
  );
}
