import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
    };
  }
  
  componentDidMount() {
    this.props.getTitle(this.state.title);
  }
  
  render() {
    const { showDescription } = this.state;
    const { title, backgroundImage, date, rating, votes, description, genres, liked, likeChange, movie_id } = this.props;
    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>
      
          <div className="card__like">
              <i className="fa fa-heart-o" />
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>

          <div className="card__subtitle">
              <span>{genres}</span>
          </div>
      
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            
            <button onClick={() => {likeChange(movie_id)}}>{liked ? "Dislike" : "Like"}</button>
            
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>
      </div>
    );
  }
}
