import { movieApi } from "@/services/movie";
import { favsSlice } from "./slices";


export const reducer = {
   favs : favsSlice.reducer,
  [movieApi.reducerPath]: movieApi.reducer,

};
