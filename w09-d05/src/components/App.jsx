import React, { Component } from 'react';
import MovieForm from './MovieForm/MovieForm.jsx';
import MovieList from './MovieList/MovieList.jsx';
import MovieSearchItem from './MovieSearchItem/MovieSearchItem.jsx';
import style from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchTerm: '',
      search: '',
    };
  }

  fetchNowPlaying() {
    console.log('so fetch')
    fetch('/movies')
    .then(r => r.json())
    .then((movieData) => {
      this.setState({
        movies: movieData,
      });
    })
    .catch(error => console.log(error));
  }

  deleteMovie(id) {
    console.log('delete', id);
    fetch(`/movies/${id}`, {
      method: 'delete',
    })
    .then(this.filterMovies(id))
    .catch(err => console.log(err));
  }

  filterMovies(id) {
    const movies = this.state.movies.filter((movie) => {
      return movie.id !== id;
    });
    this.setState({ movies });
  }

  handleUpdateSearch(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  searchMovie() {
    console.log('search');
    fetch(`/omdb/${this.state.searchTerm}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        search: data,
      });
    })
    .catch(err => console.log(err));
  }

  formHandler() {
    console.log('form')
    const formData = {
      title: this.state.search.Title,
      poster: this.state.search.Poster,
    };
    this.saveMovie(formData);
  }

  saveMovie(formInfo) {
    console.log('save');
    fetch('/movies', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(formInfo),
    })
    .then(this.setState({
      searchTerm: '',
      search: '',
    }))
    .then(this.fetchNowPlaying());
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Müvie Haus 3</h1>
        </nav>
        <MovieForm
          searchTerm={this.state.searchTerm}
          handleUpdateSearch={event => this.handleUpdateSearch(event)}
          searchMovie={this.searchMovie.bind(this)}
        />
        <div id="movie-container">
          <MovieList
            movies={this.state.movies}
            fetchNowPlaying={this.fetchNowPlaying.bind(this)}
            deleteMovie={this.deleteMovie.bind(this)}
          />
          <MovieSearchItem
            movie={this.state.search}
            formHandler={this.formHandler.bind(this)}
          />
        </div>
        <footer>
          <p>&copy; Made with <span>&hearts;</span> by Krystyna Malewski in 2016.</p>
        </footer>
      </div>
    );
  }
}

export default App;
