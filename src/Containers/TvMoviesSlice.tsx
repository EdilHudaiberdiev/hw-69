import {createSlice} from '@reduxjs/toolkit';
import {IShow} from '../types';
import {fetchTvMovieById, fetchTvMovies} from './TvMoviesThunk';

interface tvMoviesState {
  movies: IShow[];
  currentShow: IShow | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: tvMoviesState = {
  movies: [],
  currentShow: null,
  isLoading: false,
  isError: false,
};

const TvMoviesSlice = createSlice({
  name: 'tvMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTvMovies.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTvMovies.fulfilled, (state, action ) => {
      const movies: IShow[] = [];
      console.log(action.payload);

      if (Array.isArray(action.payload) && action.payload.length > 0) {
        action.payload.map(movie => {
          if ('show' in movie) {
            movies.push(movie.show);
          }
        });
      }

      state.movies = movies;
      state.isLoading = false;
    });

    builder.addCase(fetchTvMovies.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });


    builder.addCase(fetchTvMovieById.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTvMovieById.fulfilled, (state, action ) => {
      state.currentShow = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchTvMovieById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

  }
});


export const TvMoviesReducer = TvMoviesSlice.reducer;