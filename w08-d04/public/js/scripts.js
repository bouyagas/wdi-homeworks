'use strict';

console.log('js connected');

(() => {
  const containerLeft = document.querySelector('#container-left');
  const containerRight = document.querySelector('#container-right');
  const searchResultsContainer = document.querySelector('#search-results');
  const input = document.querySelector('#search-input');
  const searchButton = document.querySelector('#search-button');
  const form = document.querySelector('#hidden-form');

  function renderNowPlaying(movieData) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (containerLeft.hasChildNodes()) {
      containerLeft.removeChild(containerLeft.lastChild);
    }

    for(let i = 0; i < movieData.length; i++) {
      let movieDiv = document.createElement('div');
      movieDiv.setAttribute('class', 'movie-item');

      let theaterNumber = document.createElement('h4');
      // check to see if a theater has been assigned
      if (movieData[i].theater === null) {
        theaterNumber.textContent = 'Theater information unavailable';
      } else {
        theaterNumber.textContent= `PLAYING IN THEATER ${movieData[i].theater}`;
      }
      movieDiv.appendChild(theaterNumber);

      let title = document.createElement('h3');
      title.setAttribute('class', 'movie-title');
      title.textContent = movieData[i].title;
      movieDiv.appendChild(title);

      let poster = document.createElement('img');
      poster.setAttribute('class', 'movie-poster');
      if (movieData[i].poster === 'N/A') {
        poster.setAttribute('src', 'http://palmtruck.com/wp-content/plugins/inventory-manager-plugin/includes/acf/images/noimageavailable.png');
      } else {
        poster.setAttribute('src', movieData[i].poster);
      }
      movieDiv.appendChild(poster);

      let movieButton = document.createElement('a');
      movieButton.setAttribute('class', 'now-playing-button');
      movieButton.setAttribute('href', `/shows/${movieData[i].id}`);
      movieButton.textContent = 'Click here for more info';
      movieDiv.appendChild(movieButton);
      containerLeft.appendChild(movieDiv);
    }
  }

  function fetchNowPlaying() {
    fetch('/movies')
    .then(r => r.json())
    .then(movieData => {
      renderNowPlaying(movieData);
    })
  }

  fetchNowPlaying();

  function renderSearchMovie(searchResult) {
    // code help on how to remove all child nodes from div element from http://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
    while (searchResultsContainer.hasChildNodes()) {
      searchResultsContainer.removeChild(searchResultsContainer.lastChild);
    }

    // Check to make sure that the response object is valid
    if (searchResult.Error) {
      let sorry = document.createElement('p');
      sorry.textContent = 'Sorry, no results found. Please try a different movie.';
      searchResultsContainer.appendChild(sorry);
    } else {
      let movieDiv = document.createElement('div');
      movieDiv.setAttribute('class', 'movie-item');

      let title = document.createElement('h3');
      title.setAttribute('class', 'movie-title');
      title.textContent = searchResult.Title;
      movieDiv.appendChild(title);

      let poster = document.createElement('img');
      poster.setAttribute('class', 'movie-poster');
      if (searchResult.Poster === 'N/A') {
        poster.setAttribute('src', 'http://palmtruck.com/wp-content/plugins/inventory-manager-plugin/includes/acf/images/noimageavailable.png');
      } else {
        poster.setAttribute('src', searchResult.Poster);
      }
      movieDiv.appendChild(poster);

      let row = document.createElement('div');
      let rating = document.createElement('p');
      rating.textContent = `Rated: ${searchResult.Rated}`;
      row.appendChild(rating);
      let runtime = document.createElement('p');
      runtime.textContent = `Runtime: ${searchResult.Runtime}`;
      row.appendChild(runtime);
      movieDiv.appendChild(row);

      searchResultsContainer.appendChild(movieDiv);

      // create hidden form
      let searchTitle = document.createElement('input');
      searchTitle.setAttribute('type', 'hidden');
      searchTitle.setAttribute('name', 'title');
      searchTitle.setAttribute('value', searchResult.Title);
      form.appendChild(searchTitle);

      let searchPoster = document.createElement('input');
      searchPoster.setAttribute('type', 'hidden');
      searchPoster.setAttribute('name', 'poster');
      searchPoster.setAttribute('value', searchResult.Poster);
      form.appendChild(searchPoster);

      let searchRating = document.createElement('input');
      searchRating.setAttribute('type', 'hidden');
      searchRating.setAttribute('name', 'rated');
      searchRating.setAttribute('value', searchResult.Rated);
      form.appendChild(searchRating);

      let searchRuntime = document.createElement('input');
      searchRuntime.setAttribute('type', 'hidden');
      searchRuntime.setAttribute('name', 'runtime');
      searchRuntime.setAttribute('value', searchResult.Runtime);
      form.appendChild(searchRuntime);

      let searchPlot = document.createElement('input');
      searchPlot.setAttribute('type', 'hidden');
      searchPlot.setAttribute('name', 'plot');
      searchPlot.setAttribute('value', searchResult.Plot);
      form.appendChild(searchPlot);

      let saveButton = document.createElement('button');
      saveButton.setAttribute('id', 'save-movie-button');
      saveButton.setAttribute('type', 'submit');
      saveButton.textContent = 'Add movie to queue';
      saveButton.addEventListener('click', formHandler);
      form.appendChild(saveButton);


        // Code attributed from puppies lab
      function formHandler() {
        form.addEventListener('submit', function(event) {
          console.log('clicked!')
          event.preventDefault();
          const formData = {
            title: searchTitle.value,
            poster: searchPoster.value,
            rated: searchRating.value,
            runtime: searchRuntime.value,
            plot: searchPlot.value
          };
          console.log(formData);

          saveMovie(formData);

          while (searchResultsContainer.hasChildNodes()) {
            searchResultsContainer.removeChild(searchResultsContainer.lastChild);
          }

          while (form.hasChildNodes()) {
            form.removeChild(form.lastChild);
          }

          fetchNowPlaying();

        });
      }
    }
    input.value = "";
  }

  function searchMovie() {
    while (form.hasChildNodes()) {
      form.removeChild(form.lastChild);
    }
    // Split movie into an array
    const nameArray = input.value.split(' ');
    let movieTitle = nameArray[0];
    // Loop through array to concatenate words in title together with '+'
    for (let i = 1; i < nameArray.length; i++ ) {
      movieTitle = `${movieTitle}+${nameArray[i]}`;
    }
    fetch(`/omdb/${movieTitle}`)
    .then(r => r.json())
    .then(searchResult => {
      renderSearchMovie(searchResult);
    })
  }

  searchButton.addEventListener('click', (event) => {
    console.log('clicked!');
    searchMovie();
  })

  // code from hw-w04-d05
  function addEnter() {
    if (event.which === 13) {
      event.preventDefault();
      searchMovie();
    }
  }

  document.addEventListener('keydown', addEnter);

  // Code attributed from puppies lab
  function saveMovie(formInfo) {
    console.log(formInfo);
    return fetch('/movies', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formInfo)
    });
  }


})();

