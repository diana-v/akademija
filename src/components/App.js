import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl, getGenres } from '../config';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      list: [],
      genres: [],
      likes: [],
    };
  }
  componentDidMount() {
    axios
      .get(endpoints.mostPopularMovies())
      .then((data) => {
        this.setState({
          list: data.data.results,
        });
      });
    axios
      .get(endpoints.genres())
      .then((data) => {
        this.setState({
          genres: data.data.genres,
        });
      });
  }
  
  getTitle = (title) => {
    // console.log(title);
  };
  filterMovies = (genre_id) => {
    axios
    .get(endpoints.genreMovies(genre_id))
    .then((data) => {
      this.setState({
        list: data.data.results,
      });
    });
  };
  getMovieLike = (movie_id) => {
    for (var i=0; i<this.state.likes.length; i++) {
        if (this.state.likes[i] === movie_id) {
          return true;
        } 
    }
    return false;
  }

  likeChange = (movie_id) => {
    for (var i=0; i<this.state.likes.length; i++) {
        if (this.state.likes[i] === movie_id) {
          this.state.likes.splice(i, 1)
          this.setState({
            likes: this.state.likes,
          });
          return 
        } 
    }
    this.state.likes.push(movie_id)
    this.setState({
      likes: this.state.likes,
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.genres.map((genre) => (
          <button onClick={() => { this.filterMovies(genre.id)}}>{genre.name}</button>
        ))}</div>
        
        {this.state.list.map((card) => (
          <Card
            getTitle={this.getTitle}
            genres={getGenres(card.genre_ids, this.state.genres)}
            liked={this.getMovieLike(card.id)}
            key={card.original_title}
            backgroundImage={getImageUrl(card.backdrop_path)}
            date={card.release_date}
            rating={card.vote_average}
            votes={card.vote_count}
            description={card.overview}
            title={card.original_title}
            likeChange={this.likeChange}
            movie_id={card.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
