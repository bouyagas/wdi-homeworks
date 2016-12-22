
'use strict';
$(document).ready(() => {
  $.ajax({
    url: 'http://itunes.apple.com/search?term=ke$ha&entity=album',
    type: 'GET',
    dataType: 'JSONP',
    success: (data) => {
      console.log(data);
      const $albumList = $('<ul>');
      for (let i = 0; i < data.results.length; i++) {
        let albumName = data.results[i].collectionName;
        let $li = $('<li>');
        if (data.results[i].trackCount !== 1) {
          $li.text(albumName);
          $li.css({
            "font-family": 'Marvel',
            "font-size": "25px"
          });
          $albumList.append($li);
        }
        $albumList.css({
          "background-color":"aqua",
          "width": "100%",
          "text-align": "center",
          "list-style": "none",
          "opacity": "0.6"
        });
      }
    $('#albums').append($albumList);

      const pictures = $('<div>')
      pictures.attr("id", "kids");
      pictures.css({
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "space-around",
        "align-items": "center",
        "flex-wrap": "wrap"
      })
      for (let i = 0; data.results.length; i++) {
        if (data.results[i].collectionExplicitness === "notExplicit" && data.results[i].trackCount !== 1) {
          let albumArt = $('<img>');
          albumArt.attr("src", data.results[i].artworkUrl100);
          albumArt.css({
            "display": "inline-block",
            "margin": "5px"
          });
          pictures.append(albumArt);
          pictures.css({
            "background-color": "rebeccapurple",
            "width": "100%"
          });
        }
      $('#kid-friendly').append(pictures);
      }
    }
  });

  $.ajax({
    url: 'https://itunes.apple.com/search?term=ke$ha&entity=song&limit=5&sort=recent',
    type: 'GET',
    dataType: 'JSONP',
    success: (data) => {
      let tracks = $('<div>');
      tracks.css({
        "background-color": "#ffff80",
        "width": "100%",
        "text-align": "center",
        "font-family": 'Marvel',
        "font-size": "25px",
        "opacity": "0.7"
      });
      for (let i = 0; i < data.results.length; i++) {
        let $div = $('<div>');
        $div.text(data.results[i].trackName);
        tracks.append($div);
      }
      $('#tracks').append(tracks);
    }
  });


});

