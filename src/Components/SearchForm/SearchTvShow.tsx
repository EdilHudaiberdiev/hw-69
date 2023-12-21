import {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchForm = () => {

  const [inputValue, SetInputValue] = useState<string>('');


  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tv Movie" />}
      />
    </div>
  );
};

export default SearchForm;