import { MovieDetail } from '@/types/movies';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import WishlistButton from '../WishlistButton';

const Attrs = [
  'Year',
  'Type',
  'Rated',
  'Released',
  'Genre',
  'Director',
  'Writer',
  'Actors',
  'Country',
  'imdbRating',
  'imdbVotes',
  'Awards'
];
export type KeyValue = { [key: string]: string };
type Props = {
  movie: MovieDetail;
};
export default function MovieDetailContent(props: Props) {
  const { movie } = props;
  const { Poster, Title, Ratings, imdbID, Plot } = movie;
  return (
    <Paper sx={{ padding: 4 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box height={{xs : "400px" , md : "100%"}} sx={{ position: 'relative',minHeight :"400px" , width : "100%" }}>
            <Image objectFit="contain" src={Poster} fill alt="" />
          </Box>
        </Grid>
        <Grid item  md={6}>
          <Box>
            <Typography component={'h1'} variant="h5">
              {Title}
            </Typography>
       

            <Typography marginTop={4}>{Plot}</Typography>

            <WishlistButton
              Poster={Poster}
              Title={Title}
              Type={movie.Type}
              Year={movie.Year}
              imdbID={imdbID}
            />

            <Divider sx={{ marginY: 2 }} />

            <Typography fontWeight={600}>Ratings</Typography>

            {Ratings.map((rate) => (
              <Typography key={rate.Source}>{`${rate.Source}: ${rate.Value}`}</Typography>
            ))}

            <Divider sx={{ marginY: 4 }} />

            {Attrs.map((attr) => (
              <>
                {(movie as unknown as KeyValue)[attr] ? (
                  <Typography variant="body1" key={attr}>{`${attr}: ${
                    (movie as unknown as KeyValue)[attr]
                  }`}</Typography>
                ) : null}
              </>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
