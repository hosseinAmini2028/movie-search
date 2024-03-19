'use client';

import { useGetMoviebyIDQuery } from '@/services/movie';
import { Container } from '@mui/material';
import { QueryStatus } from '@reduxjs/toolkit/query';
import Loading from '../Loading';
import MovieDetailContent from './MovieDetailContent';

type Props = {
  id: string;
};
export default function MovieDetail(props: Props) {
  const { id } = props;
  const { data, status , isLoading } = useGetMoviebyIDQuery(id, {
    skip: !id
  });

  const loading = isLoading || status === QueryStatus.pending;
  return (
    <Container maxWidth={'lg'}>
         {isLoading || loading ? (
      <Loading />
    ) : (
      <>
       {data?.Response === 'True' ? <MovieDetailContent movie={data} /> : 'sss'} 
      </>
    )} 
    </Container>
  );
}
