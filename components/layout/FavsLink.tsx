'use client';

import { selectFavs, useSelector } from '@/lib/store';
import { Badge, IconButton } from '@mui/material';
import Link from 'next/link';
import ClientOnlyComponent from '../ClientOnlyComponent';
import IconHeart from '../icons/IconHeart';

export default function FavsLink() {
  const items = useSelector(selectFavs);
  return (
    <IconButton LinkComponent={Link} href="/favs">
      <ClientOnlyComponent>
        <>
          {items?.length > 0 ? (
            <Badge badgeContent={items?.length} color="primary">
              <IconHeart />
            </Badge>
          ) : (
            <IconHeart />
          )}
        </>
      </ClientOnlyComponent>
    </IconButton>
  );
}
