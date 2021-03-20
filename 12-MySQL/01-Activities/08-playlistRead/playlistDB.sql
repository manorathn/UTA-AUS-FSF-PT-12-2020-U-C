DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  artist VARCHAR(30) NULL,
  genre VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Dallas", "Alan Jackson", "Country");

INSERT INTO songs (title, artist, genre)
VALUES ("Amarillo By Morning ", "George Strait", "Country");

