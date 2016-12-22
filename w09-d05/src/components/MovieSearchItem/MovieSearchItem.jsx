import React from 'react';
import './MovieSearchItem.css';

const MovieSearchItem = props => (
  <div className="movie-search-item">
    <div id="movie-info-container">
      <h4>{props.movie.Title}</h4>
      <div id="search-movie-poster">
        <img src={props.movie.Poster} alt={props.movie.Poster}/>
      </div>
      <p>{props.movie.Plot}</p>
      <p>Rating: {props.movie.Rated}  |  Runtime: {props.movie.Runtime}</p>
    </div>
    <button onClick={() => props.formHandler()}>Save</button>
  </div>
);

export default MovieSearchItem;
