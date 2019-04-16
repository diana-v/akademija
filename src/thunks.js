import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList } from './actions';

export const getMovieList = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};
