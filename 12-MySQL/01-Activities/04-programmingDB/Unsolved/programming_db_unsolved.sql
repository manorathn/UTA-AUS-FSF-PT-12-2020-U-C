-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;



CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) auto_increment NOT NULL, 
  -- Create a string column called "language" --
  language VARCHAR(20),
  -- Create an integer column called "rating" --
  rating INTEGER(11), 
  -- Create a boolean column called "mastered" which will automatically fill --
  mastered BOOLEAN DEFAULT true,
  -- with true when a new row is made and the value isn't otherwise defined. --
  PRIMARY KEY(id)
  -- Set the id as this table's primary key
);

-- Create new example rows
INSERT INTO programming_languages (language, rating)
VALUES ("Java", 95);

INSERT INTO programming_languages(language, rating)
VALUES ("C++", 95);

INSERT INTO programming_languages (language, rating)
VALUES("JQuery", 96);

INSERT INTO programming_languages (language, rating)
VALUES ("Python", 96);	