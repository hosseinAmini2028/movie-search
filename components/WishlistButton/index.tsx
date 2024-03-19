'use client';

import { favsSlice, selectFavs, useDispatch, useSelector } from '@/lib/store';
import { MovieListItem } from '@/types/movies';
import { IconButton } from '@mui/material';
import IconHeart from '../icons/IconHeart';
import IconHeartFill from '../icons/IconHeartFill';

export default function WishlistButton(props: MovieListItem) {
  const { imdbID } = props;
  const favItems = useSelector(selectFavs);
  const dispatch = useDispatch();

  const isFavItem = favItems?.find((i) => i.imdbID === imdbID);

  const toggleFavItem = () => {
    if (!isFavItem) {
      dispatch(favsSlice.actions.addToFaveHandler({ ...props }));
    } else {
      dispatch(favsSlice.actions.removeFromFaveHandler(imdbID));
    }
  };
  return (
    <IconButton onClick={toggleFavItem}>{isFavItem ? <IconHeartFill /> : <IconHeart />}</IconButton>
  );
}
