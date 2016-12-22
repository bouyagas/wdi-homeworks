'use strict';

$(() => {
  const $searchField = $('input');
  const $submit = $('button');
  const $movies = $('#movies');
  let $newMovieInfo = null;

  const appendMovie = (name, imagePath) => {
    const $div = $('<div>');
    const $h5 = $('<h5>');
    const $img = $('<img>');
    $h5.text(name);
    $div.append($h5);
    $img.attr('src', imagePath);
    $div.append($img);
    $div.css({
      'flex-grow': '1',
      'min-width': '25%',
      'padding': '20px'
    });
    $movies.append($div);
  };

  const handleResponse = (movieObject) => {
    const title = movieObject.Title;
    const poster = movieObject.Poster;
    // Check to see if there is an image available for this movie
    if (poster !== 'N/A') {
      appendMovie(title, poster);
    } else {
      alert('Sorry, there is no image available for this movie. Please try searching for a different movie.');
    }
  };

  const getData = () => {
    // Split movie title into an array
    const nameArray = $searchField.val().split(' ');
    let movieTitle = nameArray[0];
    // Loop through array and append words of title together with a "+"
    // to replicate url of longer movie titles
    for (let i = 1; i < nameArray.length; i += 1) {
      movieTitle = `${movieTitle}+${nameArray[i]}`;
    }
    $.ajax({
      url: 'http://www.omdbapi.com',
      method: 'GET',
      dataType: 'json',
      data: {
        t: movieTitle,
      },
    })
    .done((data) => {
      $newMovieInfo = data;
      // Check to see if request was successful
      if (data.Response === 'False') {
        alert('Sorry your request is invalid. Please try a different movie.');
      } else {
        handleResponse($newMovieInfo);
      }
    });
    // Clear input field
    $searchField.val(' ');
  };

  const addAJAXFunction = function () {
    $submit.on('click', getData);
  };

  addAJAXFunction();

  const addAJAXFunctionEnter = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      getData();
    }
  };
  $('body').keypress(addAJAXFunctionEnter);
});
