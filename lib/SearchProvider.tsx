"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

export type SearchContextType = {
  page: number | undefined;
  setPage: (page: number) => void;
  s: string | null | undefined;
  setS: (s: string | null | undefined) => void;
  query : string;
};
export const SearchContext = createContext<SearchContextType>({
  page: 1,
  setPage: () => {},
  s: undefined,
  setS: (s: string | null | undefined) => {},
  query : '?s=hello'
});

export const useSearch = () => useContext(SearchContext);
export default function SearchProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<number | undefined>(1);
  const [s, setS] = useState<string | null | undefined>(null);

  const currentPage = useSearchParams().get('page');
  const currentS = useSearchParams().get('s');
  const router = useRouter();
  useEffect(() => {
    currentS?.length && setS(currentS);
    currentPage && setPage(Number(currentPage));
  }, []);

  useEffect(() => {
    router.push(`/?page=${page}${currentS ? '&s=' + s : ''}`);
  }, [page]);

  useEffect(() => {
    router.push(`/?s=${s}`);
  }, [s]);

  const query = useMemo(()=>{
    return `${!s ? 's=hello' : 's='+s}${page ? '&page=' + currentPage : ''}`
  },[currentPage,currentS]);

  return (
    <SearchContext.Provider
      value={{
        page,
        setPage,
        s,
        setS,
        query
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
