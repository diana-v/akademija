import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList, setGenreList, getLikeList, changeMovieLike, setLikeList } from './actions';

export const getMovieList = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((data) => dispatch(setMovieList(data.data.results)))
    .catch((error) => console.log(error));
};

export const getGenreList = () => (dispatch) => {
  axios
    .get(endpoints.genres())
    .then((data) => dispatch(setGenreList(data.data.genres)))
    .catch((error) => console.log(error));
};

export const getFilteredMovieList = (id) => (dispatch) => {
  axios
    .get(endpoints.genreMovies(id))
    .then((data) => dispatch(setMovieList(data.data.results)))
    .catch((error) => console.log(error));
};

export const getMovieLikeList = () => (dispatch) => {
  dispatch(setLikeList([]));
};

export const movieLikeChange = (id) => (dispatch) => {
  dispatch(changeMovieLike(id))
};
