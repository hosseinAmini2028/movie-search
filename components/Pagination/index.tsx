import { useSearch } from '@/lib/SearchProvider';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
  count: string;
};
export default function Pagination(props: Props) {
  const { count } = props;
  const { setPage , page} = useSearch();
  return (
    <Stack spacing={2}>
      <MuiPagination
        count={Math.ceil(Number(count) / 10)}
        variant="outlined"
        shape="rounded"
        defaultPage={page}
        onChange={(_, value) => setPage(value)}
      />
    </Stack>
  );
}
