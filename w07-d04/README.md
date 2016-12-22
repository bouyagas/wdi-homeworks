# SQL homework, NBA Style!!

![Jordan Still The GOAT](https://media.giphy.com/media/3mISSzQUAVwmQ/giphy.gif)

## Topics
* Databases
* PostgreSQL

## Resources
* [PostgreSQL Docs](https://www.postgresql.org/docs/9.6/static/index.html)
* [PostgreSQL Tutorial](https://www.tutorialspoint.com/postgresql/index.htm)

## Hints
* From Terminal, `psql` starts a connection to PostgreSQL
* Within psql
* `\l` lists all of your databases
* `\c <your database>` connect to your database
* `\dt` displays all tables within current database
* `\q` quit psql

## Setup
Use the included file, `nba_season_2011-12.csv` to solve the following problems. For this exercise you will work with the following files:

1. `nba_seeds.sql`: creates and inserts into the NBA table
2. `nba_queries.sql`: gets data out of the NBA table (you need to add this one!)

## Completion

**Please finish through Part 4**

## Part 1
#### Create and run a simple SQL seed file

1. Create a database called `nba_db`.
1. Create a SQL script called `nba_seeds.sql` that:
  1. Drops a table named `players` if it exists,
  1. Creates a table called `players` with columns for:
    - `name`
    - `age`
    - `team`
    - `games`
    - `points`
  1. Inserts the player:<br>
     `Anderson Varejao, age: 29, team: CLE, games: 25, points: 271`.

You should be able to run `nba_seeds.sql` and populate your `nba_db` from the command line with:

```
$ psql -d nba_db -f nba_seeds.sql
```

## Part 2
#### Create an SQL seed file for the entire .csv file

Look at the `nba_seeds.sql` file where the COPY players is commented out - what do you think it is doing?

Uncomment and make necessary edits to this COPY command in order to get it to run on your machine. The command `pwd` in your terminal may help!

Afterwards comment out the single insert player command, and run the seeds file again:

```
$ psql -d nba_db -f nba_seeds.sql
```

## Part 3
#### Practice SQL queries!

Some of the prompts may go a little further than what we saw in class, but should be very easy to Google / help each other out with. Some useful things to look up:
* WHERE
* ORDER BY
* LIMIT
* AVG

Create a file called `nba_queries.sql`, then figure out and record the SQL query commands that return the following:

1. All columns for all players from the New York Knicks (NYK).
2. All columns for all players from the Indiana Packers (IND) who are under 26 years old.
3. All columns for all players, ordered from least points scored to most points scored.
4. Name and Points per game (points/games), for the players with the top 20 points per game.
5. The average age for all players.
6. The average age for all players on the Oklahoma City Thunder (OKC).
7. The average age for all players who played more than 40 games.

## Part 4
#### More SQL queries!

Add the following to your `nba_queries.sql` file:

1. The team and total points scored from all players on that
team (team points) ordered from most team points to least.

2. The age and the average points per game for that age, ordered from oldest to youngest for all ages.

3. The team and the the number of players who score above 12 points per game on that team, ordered from the most number of players to the least number of players.
