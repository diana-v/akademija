export const setMovieList = (list) => ({
  type: 'SET_MOVIE_LIST',
  list,
});

export const setGenreList = (list) => ({
  type: 'SET_GENRE_LIST',
  list,
});

export const setLikeList = (list) => ({
  type: 'SET_LIKE_LIST',
  list,
});

export const changeMovieLike = (id) => ({
  type: 'CHANGE_MOVIE_LIKE',
  id,
});
