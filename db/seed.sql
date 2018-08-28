-- CREATE TABLE users(
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	username VARCHAR(30) NOT NULL,
-- 	first_name VARCHAR(255) NOT NULL,
-- 	last_name VARCHAR (255) NOT NULL, 
-- 	email VARCHAR(100) NOT NULL,   
-- 	password BINARY NOT NULL,
-- 	account_type ENUM('Student', 'Instructor', 'Administrator') NOT NULL,	-- this specifies whether the user is a student, instructor, or administrator
-- 	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id)
-- );
INSERT INTO users (username, first_name, last_name, email, password, account_type)
VALUES ('asdf','a','b','a@gmail.com','asdf','Administrator')