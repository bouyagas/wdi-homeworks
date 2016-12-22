# Müvie Haus

![](https://media.giphy.com/media/56vLtntOmVfvG/giphy.gif)

Our new client, Gerard von Schtieffel, owns an independent theatre that plays only the best movies across time and genres. He's hired us because in this new-fangled age of technology, he needs a new edge in order to compete with the Megaplexes of the world (Megaplexi? Megapli?).

That edge? **AJAX**. Be sure to review the AJAX documentation below.

Gerard wants to be able to manage his new website on his own. He'll be able to search for a movie and add it to his list of movies currently playing at the Müvie Haus.

To do this, we'll be getting data from the Open Movie Database (OMDB) using AJAX.

We'll use the data AJAX returns to dynamically change the page with DOM manipulation. While functionality is critical, **design** is also important. Gerard insists that his website must be stylish and sharp.

### Resources

[jQuery AJAX GET method](https://api.jquery.com/jquery.get/)

[General jQuery AJAX](http://api.jquery.com/jquery.ajax/)

[OMDBApi Reference](https://www.omdbapi.com/)

For OMDBApi, don't worry about separate Poster API requests. You should be able to get movie posters out of the normal request.

### Set Up

Starter code has been provided. Work in the `starter.js` file. There is starter code in the `index.html` file, but it's really just there to help you get started with the AJAX calls. Once you get your website working, you're encouraged to wipe out the current HTML and CSS and make it your own.

### Completion

There are four functions in the JavaScript. Aim to complete all four. We'll also be considering style/design. Once your OMDB AJAX calls are retrieving and appending movie info correctly, spend time making your page look nice. There are also additional bonuses to tackle!

### Assignment

There are four functions

* getData should take an input of a movieTitle, and **RETURN** an **AJAX GET** to `"http://www.omdbapi.com/?t=" + MOVIE-TITLE + "&r=json"`  
    Try printing the return data in console and seeing what the data looks like. Be sure to save this value in a variable, you'll want to pass it in to another function later.

* addAJAXFunction is a listener on the submit button. This function uses the **movie input element's value** (which should be a movie title!) and **invokes getData** with the movie title. When getData is **SUCCESSFUL**, it should invoke handleResponse and pass in the movie data.

* handleResponse should take an input of data, parse through it to isolate the movie name and the image path, and invokes appendMovie to create an element.

* appendMovie takes two inputs, `name` and `imagePath`, and creates a series of elements that fit into the scheme of the HTML. Checkout the movie that is hard coded in the HTML file to see how this should be done. There is already an example of what this looks like in the HTML!


### Bonus

* Consider how the `GET` url uses the name of the movie. One word movie title work effortlessly, but what about long tiles? Play around with the input string when the movie has multiple words. How can you make sure the url won't have any spaces? Figure out a way to correctly search for the movie "Jay and Silent Bob Strike Back" and successfully return the data. Does it work for "Mad Max 2: The Road Warrior"?

* What happens if you search for something and it doesn't return a legitimate movie? It will still append to the page, and mess up the styling of subsequent movies. Add a conditional so that only searches with good results will append movie information to the page. `HINT` - checkout the `error` method in the jQuery AJAX docs.

* This is another good chance to practice your flexbox skills when displaying saved movies.
