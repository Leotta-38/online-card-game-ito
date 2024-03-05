CREATE DATABASE game_ito;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  uuid TEXT NOT NULL,
  number INTEGER UNIQUE,
  response TEXT,
  orderid INTEGER UNIQUE
);

CREATE TABLE topics(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  min TEXT NOT NULL,
  max TEXT NOT NULL
);

INSERT INTO topics (name, min, max) 
VALUES ('The strong animal', 'weakest', 'strongest')
RETURNING *;
INSERT INTO topics (name, min, max) 
VALUES ('The country you want to live in', 'least', 'most')
RETURNING *;
