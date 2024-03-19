import MovieList from '@/components/MovieList';
import SearchProvider from '@/lib/SearchProvider';


export default async function HomePage() {
  return (
    <>
    <SearchProvider>

      <MovieList />
    </SearchProvider>
    </>
  );
}
