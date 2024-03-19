import { MovieListItem } from '@/types/movies';
import { Box, Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import WishlistButton from '../WishlistButton';
import IconArrowRight from '../icons/IconArrowRight';

export default function (props: MovieListItem) {
  const { Poster, Title, Type, Year, imdbID } = props;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            position: 'relative',
            height: '300px'
          }}
        >
          <Image src={Poster==="N/A" ? '/noimage.png' : Poster} fill objectFit="contain" alt={Title} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <WishlistButton {...props} />
          </Grid>

          <Grid item>
            <Button LinkComponent={Link} href={`/movies/${imdbID}`} endIcon={<IconArrowRight />}>
              Details
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
