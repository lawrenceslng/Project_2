DROP TABLE IF EXISTS filterCategories; 

CREATE TABLE filterCategories(
	users_id INT NOT NULL,
    category VARCHAR (255) NOT NULL,
	FOREIGN KEY (users_id) REFERENCES users(id)
);