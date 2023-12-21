import {createSlice} from '@reduxjs/toolkit';
import {fetchTvMovies} from './TvMoviesThunk';

interface tvMoviesState {
  movies: [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: tvMoviesState = {
  movies: [],
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
    builder.addCase(fetchTvMovies.fulfilled, (state ) => {
      state.isLoading = false;
    });

    builder.addCase(fetchTvMovies.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });


  }
});


export const TvMoviesReducer = TvMoviesSlice.reducer;