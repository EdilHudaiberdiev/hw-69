import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {RootState} from '../../app/store';
import Spinner from '../../Components/UI/Spinner';
import {AppDispatch} from '../../types';
import {fetchTvMovieById} from '../TvMoviesThunk';

const FullShowInfo = () => {
  const currentShow = useSelector((state: RootState) => state.tvMovies.currentShow);
  const isLoading = useSelector((state: RootState) => state.tvMovies.isLoading);
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchTvMovieById(params.id));
    }
  }, [params.id]);

  return (
    <div>
      {isLoading ? <Spinner/> : <>
        {currentShow ?
          <div className="show d-flex">
            <div className="w-50">
              {currentShow.image === null ? <p>No image</p> :
                <img src={currentShow.image.medium} alt={currentShow.name}/>
              }
            </div>
            <div className='w-50'>
              <h4>{currentShow.name}</h4>
              {currentShow.genres.length === 0 ? <p>No genres</p> :
                <p><b>Geners:</b> {currentShow.genres.join(', ')}</p>
              }
              <p><b>Language:</b> {currentShow.language}</p>
              <p><b>Premiered:</b> {currentShow.premiered}</p>
              <div dangerouslySetInnerHTML={{__html: currentShow.summary}}/>
            </div>
          </div>
          : <p>Not found</p>}
      </> }
    </div>
  );
};

export default FullShowInfo;