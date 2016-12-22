import React from 'react';
import './MovieForm.css';

// function handleKeyPress(e, cb) {
//   if (e.key === 'Enter') cb();
// }

const MovieForm = props => (
  <div id="search-container">
    <input
      type="text"
      placeholder="Search by movie title"
      value={props.searchTerm}
      onChange={props.handleUpdateSearch}
    />
    <button onClick={() => props.searchMovie()}>Search</button>
  </div>
);

export default MovieForm;
