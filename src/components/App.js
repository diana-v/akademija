import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';
// import { setMovieList } from '../actions';
import { getMovieList, getGenreList, getFilteredMovieList, getMovieLikeList, movieLikeChange } from '../thunks';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    props.onGetMovieList();
    props.onGetGenreList();
    props.onGetLikeList();
  }
  filterMovies = (genre_id) => {
    this.props.onGetFilteredMoviesList(genre_id)
  }

  isMovieLiked = (movie_id, movieLikes) => {
    for (var i=0; i<movieLikes.length; i++) {
        if (movieLikes[i] === movie_id) {
          return true;
        } 
    }
    return false;
  }

  likeChange = (movie_id) => {
    this.props.onMovieLikeChange(movie_id)
    this.forceUpdate();
  }

  render() {
    const { movieList } = this.props;
    const { genreList } = this.props;
    const { movieLikes } = this.props;
    
    return (
      <div>
      <div>{genreList.map((genre) => (
        <button onClick={() => { this.filterMovies(genre.id)}}>{genre.name}</button>
      ))}</div>
      <div>
        {movieList.map((listItem) => (
          <Card
            backgroundImage={getImageUrl(listItem.backdrop_path)}
            title={listItem.original_title}
            releaseDate={listItem.release_date}
            score={listItem.vote_average}
            votes={listItem.vote_count}
            description={listItem.overview}
            liked={this.isMovieLiked(listItem.id, movieLikes)}
            changeLike={this.likeChange}
            id={listItem.id}
          />
        ))}
      </div></div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
  genreList: state.genres.list,
  movieLikes: state.likeList.list,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMovieList: () => dispatch(getMovieList()),
  onGetGenreList: () => dispatch(getGenreList()),
  onGetLikeList: () => dispatch(getMovieLikeList()),
  onGetFilteredMoviesList: (id) => dispatch(getFilteredMovieList(id)),
  onMovieLikeChange: (id) => dispatch(movieLikeChange(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
