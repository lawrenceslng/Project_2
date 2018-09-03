DROP TABLE IF EXISTS userProfile; 

CREATE TABLE userProfile(
	id INT NOT NULL AUTO_INCREMENT,
	users_id INT NOT NULL,
    last_logged TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    biography TEXT,
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id)
);

INSERT INTO userProfile(users_id, biography)
VALUES (17, "");