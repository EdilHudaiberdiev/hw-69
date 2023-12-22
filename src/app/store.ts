import {configureStore} from "@reduxjs/toolkit";
import {TvMoviesReducer} from '../Containers/TvMoviesSlice';

export const store = configureStore({
  reducer: {
    tvMovies: TvMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
