import { MovieDetail, MovieListItem } from '@/types/movies';
import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

type MovieList = {
  Search: MovieListItem[];
  totalResults: string;
};
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),

  endpoints: (builder) => ({
    getMovies: builder.query<MovieList, string>({
      query: (query) => `/?apikey=${apiKey}&${query}`,

      transformResponse(res: { Search: MovieListItem[]; totalResults: string }) {
        const { Search, totalResults } = res;
        return { Search, totalResults };
      }
    }),

    getMoviebyID: builder.query<MovieDetail & {Response : string}, string>({
      query: (id) => `/?apikey=${apiKey}&i=${id}`,
    })
  })
});

export const { useGetMoviesQuery,useGetMoviebyIDQuery } = movieApi;

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: any) => {
  if (action?.payload?.data?.Response === 'False') {
    toast.error(action?.payload?.data?.Error ?? "Request Failed...")
  }

  return next(action);
};
