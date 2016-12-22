# Homework - Real Estate Fun with Jason!
![Jason](jason-seminara-sells.png)


**Jason Seminara**: renowned sculpter, web developer, instructor, and entrepreneur is now looking to throw his hat into the real estate game. After hearing about the wild success of Gerard von Schtieffels movie site, he has decided to hire YOU. YES. YOU! To build out a database for all of the real estate data for his side business. He has lots of data, but needs it stored in PSQL. He also wants you to figure out how to query his data! Yay jobs!

## Topics

- Establishing relationships in our data by drawing ERD Diagrams
- Practice writing your own database schema
- Practice writing SQL queries

## Setup

This weekend you will build a database representing **www.JasonSeminaraSells.com's** apartment buildings. These buildings will have apartments, tenants, and doormen. The first step will be to brain storm the relationships buildings, apartments, tenants and doormen should have with each other. Next, draw ERD's in order to establish the relationships and to help you visualize your schema. Think about what [datatypes](http://www.postgresql.org/docs/9.3/static/datatype.html) would best represent the columns in your table.

## Completion

Part 1 - 5

## Part 1 - ERD
**First**, browse this article on [foreign keys](http://www.w3resource.com/PostgreSQL/foreign-key-constraint.php).
Given the entities **Buildings**, **Apartments**, **Tenants**, and **Doormen**,
draw an ERD. What relationships exist between these tables? Which tables here should
have foreign keys that represent the relationships between the models?

- A **building** has a ...
  - name,
  - address,
  - and, a number of floors.
- An **apartment** has a ...
  - floor,
  - name,
  - price,
  - square footage,
  - number of bedrooms,
  - and a number of bathrooms.
- A **tenant** has a ...
  - name,
  - age,
  - and a gender ('Male' or 'Female').
- A **doorman** has a ...
  - a name,
  - experience (in number of shifts worked),
  - and a shift ('day' or 'night').

## Part 2 - Upload ERD

- Take a picture of your ERD and upload them to an image hosting site. I would personally suggest [imgur](http://imgur.com) (you may have to create an account).
- Create a markdown file called `database_relations.md` and link your images to your markdown - [Linking images in markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images).

## Part 3 - Create the DB / Schema

After establishing the proper relationships and drawing your ERDs, create your
database, naming it `jason_seminara_realty_db`. Create your schema for all of the tables and load it into your database from a file called `apartment_schema.sql`.

## Part 4 - Seed the DB

Run the seeds file `apartment_seeds.sql` in order to load the data into the
database.

## Part 5 - Queries

Write queries to do the following:

- Retrieve all info on all tenants
- Retrieve the name, age, and gender of all tenants
- Retrieve all info on all tenants older than 65
- Retrieve all info on all tenants in apartment with id 20
- Retrieve all info on all tenants in apartment with ids 20 or 21
- Retrieve the names of all doormen and the address where they work
- Delete all tenants whose age is greater than 65
- Change all doormen from building 3 to work night shifts.
- Create one new tenant, put them in any apartment you want
- Find just the ids for all apartments for building with id of 2
- Find all info for apartments in building number 3 whose price is greater than $2300
- Geriatric Birthday! Update all tenants whose age is 90 to be 91
- Change all tenants ages to increase by 1
- Retrieve all info on all tenants who live in an apartment that costs more than $2300
- Retrieve all doormen that work in a building with more than 5 floors
- Retrieve the tenant names, ages and the apartment price for all tenants living in an apartment larger than 1000 square feet
- Retrieve the names and experience levels for all night-shift doormen from the building Kshlerin-Klein
- Retrieve the names and ages of all tenants that live in a building with more than 6 floors and pays over $1500 for their apartment
