DROP DATABASE IF EXISTS WebDevFlashcard_db;

CREATE DATABASE WebDevFlashcard_db;

USE WebDevFlashcard_db;

-- table for all users (login system table)
-- I am going to follow the guidelines in the video I sent you guys for setting the data types of this table to make authentication and other things dealing with login system work
CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL,    
	password BINARY NOT NULL,
	email VARCHAR(100) NOT NULL,
	accountType VARCHAR(30) NOT NULL,	-- this specifies whether the user is a student, instructor, or administrator
	PRIMARY KEY (id)
);

-- each user has a profile that they can store information (like a short bio, contact info); we can create another table and link it to the users table
CREATE TABLE userProfile(
	id INT NOT NULL AUTO_INCREMENT,
	users_id INT NOT NULL,
	PRIMARY KEY (id)
    FOREIGN KEY (users_id) REFERENCES users(id)
)

-- 