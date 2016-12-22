# First Contact

![XFiles](https://media.giphy.com/media/l41lFptE01rEpCFQA/giphy.gif)

The FBI has resurrected the X-Files. Agent Mulder has resurfaced and his search for the truth remains unabated. *It is out there*.

In the years since Mulder's disappearance the digital age has brought with it treasure troves of information, both government and citizen. The FBI is still reluctant to invest too many resources into their investigations forcing Mulder and Skully to recruit a junior developer out of a bootcamp to help them make sense of all the newly available data.

You have been contracted by the scientifically rigorous Agent Skully to help in the quest for truth. You not only fit their aggressively mediocre budget, but also your profile is low enough that you can be eliminated without any repercussions—a dangerous combination.

This homework will test our newly acquired back-end skills.

## Setup

You've been provided a large `sightings.json` file. No other files have been provided!


## Assignment


![XFilesOffice](https://media.giphy.com/media/XUHaEglC894hq/giphy.gif)

Walking into the office you make yourself comfortable and start exploring their systems. Agent Scully has asked you to provide them with a way in which they would be able to list all UFO sightings __filtered__ by certain characteristics including, location, shape . In your search you stumble upon a file called `sightings.json`. It looks promising and, after some investigation, it appears to have data about UFO sightings over the past year or so.

Unfortunately, Scully knows nothing about computers.  Well, except for url query parameters, __obviously__. He wants you to implement the same functionality from before on a server in a new `app.js` file, so he can access the information through the browser. He's given you the following specs:

##### Feature 1 - Root Page

When a user goes to `localhost:3000/`, the server should **render** an HTML page that has:
* A header that says something spooky, yet FBI related
* Instructions for how to use the next feature

What kind of [**"response" / "res"**](http://expressjs.com/en/4x/api.html#res) should this be?

##### Feature 2 - Filtered Responses

When a user requests `localhost:3000/sightings[query]`, they should be able see filtered results in broswer, such as:

* A list of UFOs by state
* A list of UFOs by city
* A list of UFOs by shape

How can we access the [**query parameters**](http://expressjs.com/en/4x/api.html#req)?

The results should be __rendered__ to the page.  Each sighting should have it's own div container and have the date, city, state, shape, duration and description in separate < p >'s within that container.

## Bonus

* allow the user to send multiple parameters in their query string and return a list of sightings which matches only those parameters. If the user sends a request to
`youripaddress/sightings?shape=sphere&city=henderson&state nv` your server should respond with a list of all of the sphere shaped UFOs in Henderson, NV.
