BEGIN;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  poster TEXT NOT NULL DEFAULT 'http://palmtruck.com/wp-content/plugins/inventory-manager-plugin/includes/acf/images/noimageavailable.png',
  rated VARCHAR,
  runtime VARCHAR,
  plot VARCHAR,
  likes INT NOT NULL DEFAULT 0,
  theater INT
);

COMMIT;
