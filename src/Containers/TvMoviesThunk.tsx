import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IShow, IShows} from '../types';



const URL = 'http://api.tvmaze.com/';

export const fetchTvMovies = createAsyncThunk(
  'movies/fetch',
  async (value: string) => {
    const response = await axios.get<IShows[] | IShow>(`${URL}search/shows?q=${value}` );
    return response.data ?? [];
  });


export const fetchTvMovieById = createAsyncThunk(
  'movies/id/fetch',
  async (value: string) => {
    const response = await axios.get<IShow>(`${URL}shows/${value}`);
    return response.data ?? null;
  });
