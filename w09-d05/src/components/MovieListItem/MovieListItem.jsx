import React from 'react';
import './MovieListItem.css';

const MovieListItem = props => (
  <div className="movie-list-item">
    <h4>{props.title}</h4>
    <div id="movie-poster">
      <img src={props.poster} alt={props.name} />
    </div>
    <button onClick={() => props.deleteMovie(props.id)}>Delete</button>
  </div>
);

export default MovieListItem;
