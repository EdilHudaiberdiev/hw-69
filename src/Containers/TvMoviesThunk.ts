import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Task} from '../types';


const URL = 'http://api.tvmaze.com/search/shows?q=';

export const fetchTvMovies = createAsyncThunk(
  'movies/fetch',
  async () => {
    const response = await axios.get<Task[]>(URL + 'tasks.json');
    return response.data ?? [];
  });

export const AddNewTask = createAsyncThunk(
  'tasks/add',
  async (task: Task) => {
    await axios.post(URL + 'tasks.json', task);
  });


export const EditTask = createAsyncThunk(
  'tasks/edit',
  async (task: Task) => {
    const taskToUpdate = {...task};
    delete taskToUpdate.id;
    await axios.put(URL + `tasks/${task.id}.json`, taskToUpdate);
  });

export const DeleteTask = createAsyncThunk(
  'tasks/delete',
  async (id: string) => {
    await axios.delete(URL + `tasks/${id}.json`);
  });