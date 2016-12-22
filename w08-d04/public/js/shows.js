'use strict';

(() => {

    console.log('show connected');
    const movieContainer =  document.querySelector('#movie-container');
    const movieInfo = document.querySelector('#movie-info');

    function renderMovie(movieData) {
      let movieDiv = document.createElement('div');
      movieDiv.setAttribute('class', 'movie-div');

      // Render title
      let title = document.createElement('h2');
      title.textContent = movieData.title.toUpperCase();
      movieDiv.appendChild(title);

      // Render theater information
      let theaterNumber = document.createElement('p');
      if (movieData.theater != null) {
        theaterNumber.textContent = `Currently playing in Theater ${movieData.theater}`;
      } else {
        theaterNumber.textContent = 'No theater information available.'
      }
      movieDiv.appendChild(theaterNumber);

      // Check to see if poster image is available
      let posterHolder = document.createElement('div');
      let poster = document.createElement('img');
      if (movieData.poster === 'N/A') {
        poster.setAttribute('src', 'http://palmtruck.com/wp-content/plugins/inventory-manager-plugin/includes/acf/images/noimageavailable.png');
      } else {
        poster.setAttribute('src', movieData.poster);
      }
      posterHolder.appendChild(poster);
      movieContainer.appendChild(posterHolder);

      // Create a form to edit theater information
      let theaterForm = document.createElement('form');

      let editTheater = document.createElement('input');
      editTheater.setAttribute('id', 'theater-input');
      editTheater.setAttribute('name', 'theater');
      editTheater.setAttribute('placeholder', 'Update theater number');
      theaterForm.appendChild(editTheater);

      let theaterButton = document.createElement('button');
      theaterButton.setAttribute('type', 'submit');
      theaterButton.textContent = 'Update';
      theaterButton.addEventListener('click', formHandler);
      theaterForm.appendChild(theaterButton);
      movieDiv.appendChild(theaterForm);

      // Create a div to hold rating and runtime information
      let row = document.createElement('div');
      let rating = document.createElement('p');
      rating.textContent = `Rated: ${movieData.rated}`;
      row.appendChild(rating);
      let runtime = document.createElement('p');
      runtime.textContent = `Runtime: ${movieData.runtime}`;
      row.appendChild(runtime);
      movieDiv.appendChild(row);

      // Render plot info (if I can ever get this to save!)
      let plot = document.createElement('p');
      plot.textContent = movieData.plot;
      movieDiv.appendChild(plot);

      // Render Likes
      let likes = document.createElement('p');
      likes.textContent = `Likes: ${movieData.likes}`;
      movieDiv.appendChild(likes);

      // Create a div to hold buttons
      let buttonDiv = document.createElement('div');
      buttonDiv.setAttribute('id', 'button-div')

      // Create a like button with an event listener
      let likeButton = document.createElement('button');
      likeButton.textContent = 'Like!';
      likeButton.addEventListener('click', (event) => {
        likeMovie(movieData.id);
      });
      buttonDiv.appendChild(likeButton);

      // Create a delete button with an event listener
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove movie';
      deleteButton.addEventListener('click', (event) => {
        deleteMovie(movieData.id);
      });
      buttonDiv.appendChild(deleteButton);
      movieDiv.appendChild(buttonDiv);

      movieInfo.appendChild(movieDiv);

      function formHandler() {
        theaterForm.addEventListener('submit', function(event) {
          console.log('clicked!');
          event.preventDefault();
          const formData = {
            theater: parseInt(editTheater.value)
          };
          console.log(formData);
          updateTheater(formData);
        })
      }

     function updateTheater(formInfo) {
      return fetch(`/movies/theater/${movieData.id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(formInfo)
      })
      .then(clearMovie())
      .then(fetchMovie())
      .catch(error => console.log(error));
     }
    }

    function fetchMovie() {
      let qs = (window.location.pathname).split('/');
      let id = parseInt(qs[2]);
      fetch(`/movies/${id}`)
      .then(r => r.json())
      .then(movieData => {
        renderMovie(movieData);
      })
    }

   fetchMovie();

   function deleteMovie(id) {
    console.log(id);
    fetch(`/movies/${id}`, {
      method: 'DELETE'
    })
    .then(clearMovie())
    .then()
   }

   function clearMovie() {
    while (movieContainer.hasChildNodes()) {
      movieContainer.removeChild(movieContainer.lastChild);
    }
    while(movieInfo.hasChildNodes()) {
      movieInfo.removeChild(movieInfo.lastChild);
    }
   }

   function likeMovie(id) {
    fetch(`/movies/like/${id})`, {
      method: 'PUT'
    })
    .then(clearMovie())
    .then(fetchMovie())
    .catch(error => console.log(error));
   }


})();
