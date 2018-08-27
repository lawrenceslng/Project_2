-- CREATE TABLE cards(
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	category VARCHAR (255) NOT NULL,
-- 	front TEXT NOT NULL,
-- 	back TEXT NOT NULL,
-- 	difficulty ENUM('Easy', 'Medium', 'Hard') NOT NULL,
-- 	votes INT DEFAULT 0,
-- 	creator_id INT NOT NULL,
-- 	users_account ENUM('Student', 'Instructor', 'Administrator') NOT NULL,
-- 	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- 	PRIMARY KEY (id),
--     FOREIGN KEY (creator_id) REFERENCES users(id),
--     FOREIGN KEY (users_account) REFERENCES users(account_type)
-- );

-- CSS
INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("CSS","With what punctuation mark do you enclose CSS declarations in a CSS file?","Curly Braces {}","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("CSS","How does a font-family property work?","The user's browser goes through the list of fonts within the font-family property in order. If the browser does not support the first font, it moves onto the next one until it is able to interpret and display the font. This is why it is important to have a generic font to fall back on.","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("CSS", "Describe the 4 parts of the CSS box model (from outside to inside).","Margin - Clears an area outside the border, transparent. Border - A border that goes around the padding and content. Additional styling is available. Padding - Clears an area outside of the content, transparent. Content - The area where the text and images appear.","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("CSS", "What are the three ways to link a stylesheet to an HTML?","1. Externally linked (CSS file separate from HTML) 2. Internally linked (CSS is written inside a <style> tag inside the <head> section of the HTML) 3. Inline style (CSS style attribute is written inside the corresponding element tag in the HTML) ","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("CSS", "Where does the style tag go within the HTML?","Inside the <head> section of the HTML.","Easy","1","Administrator");

-- JSON
INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("JSON","What does the acronym JSON stand for?","JavaScript Object Notation","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("JSON", "What is JSON used for?","JSON is used to store and exchange data. The data format used is text.","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("JSON", "What is the syntax to convert data from an object to a string?","JSON.stringify(object)","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("JSON", "What is the syntax to convert data from a string to an object?","JSON.parse(string)","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("JSON", "Describe how the keys and values differ between JSON and JavaScript.","Keys in JSON MUST be a string while keys in JavaScript can be strings, numbers, or identifier names. Values in JSON MUST be a string, number, an object, an array, a boolean, or null while values in JavaScript can also be a function, a date, or undefined.","Easy","1","Administrator");

-- NPM
INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("NPM", "What is a package?","A package is a building block of code written by developers and shared with others for use. ","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("NPM", "What language is NPM written in and what backend component does it interact with?","NPM is written in JavaScript and interacts with the NodeJS backend environment.","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("NPM", "What is the keyword in JavaScript to use when you want to include a particular package in your code.","require('package_name')","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("NPM", "What package would you need to install if you want to make an interactive command line interface?","Inquirer","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("NPM", "What package would you need to install in order to work with routing in your backend?","Express","Easy","1","Administrator");

-- Templating
INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Templating", "What are the benefits of template engines?","Template engines allow developers to inject snippets of code into different HTML easily without copy and pasting (lowers likelihood of mistakes when creating new pages). Template engines also allow changes to be made in one centralized file for each feature of a web application rather than tracking down all the codes in many different HTMLs. ","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Templating", "Name some template engines","EJS (embedded JavaScript), Mustache, Handlebar","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Templating", "What NPM package is needed to work with a template engine like EJS and what is the syntax used to include the template engine?","The Express package is used to work with template engines. The syntax is app.set('view engine', 'ejs') assuming standard Express package syntax is used.","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Templating","What is the syntax to make the backend use a EJS file and output a HTML for use?","res.render(EJS_file)","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Templating", "What folder must the templates be in in order for Express to correctly locate them?","The 'Views' folder","Easy","1","Administrator");

-- Git
INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Git", "What is Git?","Git is a version control system. It allows developers to easily track changes in their code and revert back to a known working code as well as test new features to the code without impacting existing code.","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Git", "What is the command to create a new package.json?","git init -y","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Git", "If you do not wish to include certain files or directories in your Git upload, what do you need to do in your project folder?","You need to create a .gitignore file and include within it the names of the files and folders you do not wish to include in your upload. This is important as you do not want to upload your own credentials or all the node_modules you use in your project.","Easy","1","Administrator");


-- Terminal
INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Terminal", "What is the command to create a new folder?","mkdir folder_name","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Terminal", "What is the command to create a new file?","touch file_name","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Terminal", "What is the command to change directory?","cd directory_path","Easy","1","Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES ("Terminal", "What is the command to list the content within the current directory?","ls","Easy","1","Administrator");
