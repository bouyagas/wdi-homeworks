# Homework - Real Estate Fun with Jason, Part 2
### Creating your own API and use client-side Fetch to consume your own API

![One more time because it's my favorite png](jason-seminara-sells.png)

Aspiring real estate mogul, Jason Seminara, is quite pleased with the SQL database you created for him. He's now able to access all of his real estate data very easily, but he needs your services again! Jason is now ready for a full web application, built in Express, that will use `Fetch` and `PG-Promise` to display his real estate data in the browser!

## Setup
Working in your `/homework` directory, we will be continuing where we left off from our [Real Estate Fun Part 1](https://git.generalassemb.ly/wdi-nyc-60/hw-w07-d05) and creating an Express app using the database we seeded. If you haven't completed the weekend homework, you'll have to do that first so that you have a working database.

## Resources
[NPM PG-Promise](https://github.com/vitaly-t/pg-promise)

[PG-Promise Learn by Example](https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example)

## Completion
This is a **two** day assignment. Parts 1 through 4 should be completed by Tuesday 11:59PM. Do as much as you can tonight, but keep in mind you'll be getting additional reps on APIs and PG-Promise tomorrow.

## Requirements

We'll be building a full-stack `Express` app to show Jason's real estate data!

- An API backend that receives requests and responds with JSON
  - Hint: instead of `res.render('view', data)`, an API should respond with `res.json(data)`
- Make sure your API routes are RESTful
- Use `PG-Promise` package to interact with our database
- Client-side `fetch` to retrieve data and `Vanilla JS` to render that data to the view
- The application should have at least the following API routes:
  - `/api/buildings` returns a JSON of **all** buildings.
  - `/api/buildings/:id` returns a JSON with info about that building.
  - `/api/apartments` returns a JSON of **all** apartments.
  - `/api/apartments/:id` returns a JSON with info about that apartment.
- The application should have views for `index` and `show`
  - `index` should have buttons that render a list of all `buildings` or all `apartments`
  - each building or apartment should link to their individual `show` views
  - `show` should display the details of a specific building or apartment
- Style it up! Add some HTML structure to your application and then make it look nice with some CSS! Make something you would be proud to show off. You have two days to implement, Jason will not tolerate an ugly website!

#### Bonus
- Add the following routes:
  - `/api/tenant` returns a JSON of **all** tenants.
  - `/api/tenant/:id` returns JSON with info about that tenant.
  - `/api/doormen` returns a JSON of **all** doormen.
  - `/api/doormen/:id` returns a JSON with info about that doorman.

#### Super Bonus
- Add the following routes `Hint` Join Tables
  - `/api/apartments/:id` the JSON should include all tenants that belong to that apartment and their details as well as details about the apartment.
  - `/api/buildings/:id` the JSON should include all apartments that belong to that bulding and their details, as well as details about the building.
  - `/api/buildings/:id/doormen` the JSON should include include the building name and all related doormen with their details.

## Getting Started

#### Part 1 - Set up your Express app
- `npm init`
- Think about what node modules we'll need, `express`, `morgan`, `method-override`, `pg-promise`, `path` just to name a few...
- Set up project file/folder structure
- Routes: You'll need a router for the index page and an API router
- Views: We'll only need an `index` view and a `show` view. Since you'll be using client-side JS/Fetch to grab and render data, we'll dynamically changing content on each view.

Before continuing to the next step make sure your server is properly set up and running and responds to requests to localhost:3000/ (you can just res.send('Hello') for now).

#### Part 2 - Build your API backend

- Create API routers for `buildings` and `apartments` and direct `/api/buildings` and `/api/apartments` to those routers
- Your API routers should handle all RESTful routes for `buildings` and `apartments` resources
- Set up your models for `buildings` and `apartments` using `PG-Promise`
  - Your models should export methods/services for GET, POST, PUT, and DELETE requests
  - Remember to set up your db connection to `pg-promise` - You can either include it in each model or break it out into a separate file
- Test your API backend with Postman
  - Start small - try to get a working GET request to all `buildings` first

#### Part 3 - Views - Consume your API backend with client-side JS/Fetch

- The `index` view should welcome the user and have two buttons
- The first button should show a list of ALL `buildings`, the second button should show a list of ALL `apartments`
- In your client-side JavaScript file, you'll need to attach event listeners to each button which will make the appropriate `fetch` call and then append the data
  - You should clear out any data on the page before you append in case the user clicks either button repeatedly
  - Each building or apartment should be a link to a show view
- The `show` view should show all info related to that single resource
  - Add a delete button/functionality to the `show` view
- **Bonus** Implement edit functionality too!

#### Part 4 - Style!
- Make everything look nice! Jason demands the best looking real estate web application!!
