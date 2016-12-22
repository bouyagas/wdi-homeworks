-- Apartment schema goes here
BEGIN;

DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS doormen;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS buildings;

CREATE TABLE buildings (
  id INT NOT NULL,
  name VARCHAR NOT NULL,
  address text NOT NULL,
  num_floors INT NOT NULL
);

CREATE TABLE doormen (
  id INT NOT NULL,
  name VARCHAR NOT NULL,
  experience character(3) NOT NULL,
  shift VARCHAR NOT NULL,
  building_id INT
);

CREATE TABLE apartments (
  id INT NOT NULL,
  floor INT NOT NULL,
  name character(3) NOT NULL,
  price INT NOT NULL,
  sqft INT NOT NULL,
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  building_id INT
);

CREATE TABLE tenants (
  id INT NOT NULL,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  gender VARCHAR NOT NULL,
  apartment_id INT
);

COMMIT;

