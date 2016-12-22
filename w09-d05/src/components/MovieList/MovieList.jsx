import React, { Component } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem.jsx';
import style from './MovieList.css';

class MovieList extends Component {

  componentWillMount() {
    this.props.fetchNowPlaying();
  }

  renderAllMovies() {
    return this.props.movies.map((movie, i) =>
      <MovieListItem
        key={i}
        id={movie.id}
        title={movie.title}
        poster={movie.poster}
        deleteMovie={this.props.deleteMovie}
      />,
    );
  }

  render() {
    return (
      <div className="movie-list-container">
        {this.renderAllMovies()}
      </div>
    );
  }
}

export default MovieList;

