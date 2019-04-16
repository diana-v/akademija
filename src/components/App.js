import React from 'react';
import Card from './Card';
import axios from 'axios';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';
import { setMovieList } from '../actions';
import { getMovieList } from '../thunks';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    props.onGetMovieList();
  }
  
  render() {
    const { movieList } = this.props;
    
    return (
      <div>
        {movieList.map((listItem) => (
          <Card
            backgroundImage={getImageUrl(listItem.backdrop_path)}
            title={listItem.original_title}
            releaseDate={listItem.release_date}
            score={listItem.vote_average}
            votes={listItem.vote_count}
            description={listItem.overview}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMovieList: () => dispatch(getMovieList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
