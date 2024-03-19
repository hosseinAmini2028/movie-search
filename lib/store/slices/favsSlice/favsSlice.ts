/* Core */
import { MovieListItem } from '@/types/movies';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/* Instruments */

const initialState: FavsSliceState = typeof window === 'undefined' || typeof document === 'undefined' ? {
  favItems: [],
} : {
  favItems : JSON.parse(localStorage.getItem('ammovies-app-fav-items')?.valueOf() ?? '[]'),
}

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToFaveHandler: (state, action: PayloadAction<MovieListItem>) => {
        state.favItems = [...state.favItems,action.payload]
      

      localStorage.setItem('ammovies-app-fav-items',JSON.stringify([...state.favItems,action.payload]));
    },

    removeFromFaveHandler: (state, action: PayloadAction<string>) => {
 
        state.favItems = state.favItems.filter(i=>i.imdbID !== action.payload)
     

       localStorage.setItem('ammovies-app-fav-items',JSON.stringify(state.favItems));
    },
  },

})

/* Types */


export interface FavsSliceState {
  favItems: MovieListItem[];
}
