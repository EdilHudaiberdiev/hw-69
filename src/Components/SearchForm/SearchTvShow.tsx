import {ChangeEvent, SyntheticEvent} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useNavigate} from 'react-router-dom';
import {RootState} from '../../app/store';
import {fetchTvMovies} from '../../Containers/TvMoviesThunk';
import {AppDispatch} from '../../types';

const SearchForm = () => {
  const movies = useSelector((state: RootState) => state.tvMovies.movies);
  const dispatch: AppDispatch = useDispatch();
  const Navigation = useNavigate();

  const inputTyping =  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(fetchTvMovies(e.target.value));
  };

  const selectShow = (e: SyntheticEvent<Element, Event>, id: number) => {
    if (id && e){
      Navigation(`/shows/${id}`);
    }
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={movies}
        getOptionLabel={(option) => option.name}
        getOptionKey={(option) => option.id}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(e,value ) => selectShow(e, value!.id)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField onChange={e => inputTyping(e)} {...params} label="Tv Movie" />}
      />

      <hr/>
      <Outlet></Outlet>
    </div>
  );
};

export default SearchForm;