'use client';

import { useSearch } from '@/lib/SearchProvider';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { useEffect, useState } from 'react';
import IconLoading from '../icons/IconLoading';
import IconSearch from '../icons/IconSearch';

type Props = {
  isLoading: boolean;
};
export default function SearchInput(props: Props) {
  const { isLoading } = props;
  const { s, setS } = useSearch();
  const [searchTerm, setSearchTerm] = useState<string | null>();

  useEffect(() => {
    const handler = setTimeout(() => setS(searchTerm), 1000);

    return () => clearTimeout(handler);
  }, [searchTerm]);
  return (
    <Box>
      <OutlinedInput
        size="small"
        sx={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          '& .MuiInputBase-input': {
            boxShadow: 'none'
          }
        }}
        fullWidth
        inputMode="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.trim())}
        startAdornment={
          <InputAdornment position="start">
            <IconSearch />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            { isLoading && (
              <span>
                <IconLoading width={22} height={22} />
              </span>
            )}
          </InputAdornment>
        }
      />
    </Box>
  );
}
