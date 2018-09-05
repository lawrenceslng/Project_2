DROP TABLE IF EXISTS userProfile; 

CREATE TABLE userProfile(
	id INT NOT NULL AUTO_INCREMENT,
	users_id INT NOT NULL,
    last_logged TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    biography TEXT,
	avatarPath VARCHAR(255),
	PRIMARY KEY (id),
	FOREIGN KEY (users_id) REFERENCES users(id)
);