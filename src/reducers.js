import { combineReducers } from 'redux';

const initialState = {
  list: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        list: action.list,
      };
            
    default: return state;
  }
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
       case 'SET_GENRE_LIST':
      return {
        ...state,
        list: action.list,
      };
      
    default: return state;
  }
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
       case 'SET_LIKE_LIST':
      return {
        ...state,
        list: action.list,
      };

      case 'CHANGE_MOVIE_LIKE':
        {
          let has_index = state.list.indexOf(action.id)
          if ( has_index >= 0){
            state.list.splice(has_index, 1)
          } else {
            state.list.push(action.id)
          }

          return {
            ...state,
            list: state.list,
          };
        }

      
    default: return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  likeList: likesReducer,
});
