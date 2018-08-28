-- Seeding cards table in WebDevFlashcard_db database

--------------------------------------APIs

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("APIs", "What does API stand for?", "Application Programming Interface", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("APIs", "What are APIs?", "API is a software intermediary that allows two applications to talk to each other. An API is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system. The API provides developers with standard commands for performing common operations so they do not have to write the code from scratch.", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("APIs", "What does CRUD stand for?", "Create Read Update Delete", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("APIs", "What are the two markup languages that can be used in a RESTful Web API?", "JSON and XML", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("APIs", "What does it mean for an API to be RESTful?", "A RESTful API is an API that uses HTTP requests to GET, PUT, POST and DELETE data.", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("APIs", "What is the architectural style for creating Web APIs?", "HTTP for client server communication<br>XML/JSON as the formatting language<br>Simple URI as the address for the services", "Hard", 2, "Administrator");


--------------------------------------Bootstrap

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Bootstrap", "What Bootstrap 4 class is used to create a flexbox container and transform direct children into flex items?", "d-flex", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Bootstrap", "What is the max number of columns in Bootstrap's grid system?", "12 columns", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Bootstrap", "Which Bootstrap classes would you use to give an element a top padding of Bootstrap default size 3 and margin right and left of Bootstrap default size 2?", "class for top padding of Bootstrap default size 3: pt-3<br>class for margin right and left of Bootstrap default size 2: mx-2", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Bootstrap","Which Bootstrap class would you use to horizontally center a fixed-width block level element?", ".mx-auto", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Bootstrap","What is the Bootstrap class to float an element to the right?", "float-right", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Bootstrap","What two Bootstap classes are used to create a standard navigation bar that is responsive and collapsing?", ".navbar .navbar-expand-sm","Medium", 2, "Administrator");


--------------------------------------Command Line Interface

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Command Line Interface", "What is the command to display the current working directory?", "pwd", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Command Line Interface", "What is the command to make a new file?", "touch [name-of-file-to-create.extension]", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Command Line Interface", "What is the command to make a new folder", "mkdir [name-of-directory-to-create]", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Command Line Interface", "What is the command to move to one directory up", "cd ..", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Command Line Interface", "What is the command to move filename 1 into filename2", "mv [filename1] [filename2]", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Command Line Interface", "What is the command to delete a folder?", "rm -r [name of directory to remove]", "Hard", 2, "Administrator");

--------------------------------------Git Commands

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Git", "Once a repository is created and linked to GitHub, what are the three commands you need to do each time you create or modify files to send something up to GitHub?", "git add .<br>git commit -m <comment><br>git push origin <branch name>", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Git", "What is the git command that shows which files have changes that can be staged for commit?", "git status", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Git", "What is Git?", "Git is version control software that let's users create repositories for recording changes to a project.", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Git", "Why would you use Git?", "To track the changes that developers make to a project, especially collaborative ones.The branch system allows users to write code without creating conflicts.", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Git", "How would you delete a local Git repository?", "rm -R .git", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Git", " How do you update your local repository from GitHub?", "git pull origin <branch name>", "Hard", 2, "Administrator");


--------------------------------------JavaScript

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("JavaScript", "The first position of any string is ______.", "0", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("JavaScript", "Console log the index of the letter 'f' (without using the index 4):<br>var animal = 'the fox says';", "console.log(animal.indexOf('f')", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("JavaScript", "var animal = 'moose';<br>Write code to change the middle o to z", "one way:<br>&emsp;var animal_arr = animal.split('');<br>&emsp;animal_arr[2] = 'z';<br>&emsp;var answer = animal_arr.join('');<br><br>another way:<br>&emsp;console.log(animal.substr(0,1) + 'z' + animal.substr(3,4));", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("JavaScript", "What are the different kinds of loops used in javascript", "1. for loop<br>2. for/in loop<br>3. while loop<br>4. do/while loop", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("JavaScript", "What is a closure in javascript and in which scopes does the closure have acess to variables?", "A closure is a function defined inside another function (called the parent function) and has access to the variable which is declared and defined in parent function scope.<br>The closure has access to the variable in three scopes:<br>&emsp;1. Variable declared in its own scope<br>&emsp;2. Variable declared in parent function scope<br>&emsp;3. Variable declared in the global namespace", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("JavaScript", "Return a random number between and including min and max numbers.", "Math.floor(Math.random() * (max - min + 1)) + min;", "Hard", 2, "Administrator");


--------------------------------------NodeJS

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Node.js", "How do you initiate the Node.js file 'server.js' in your command line interface program on your computer?", "node server.js", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Node.js", "What function do you use to include a node module?", ".require()", "Easy", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Node.js", "What is process.argv in Node.js?", "The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be the file path of node on your computer. The second element will be the path to the Javascript file being executed. The remaining elements will be any additional command line arguments.", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Node.js", "What is a module.exports in Node.js?", "module.exports is an object that the current module returns when it is required in another program or module.", "Medium", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Node.js", "What is the 'fs' node module and what can it be used for?", "'fs' stands for File System module that allows you to modify the file system on your computer. The 5 uses for the File System node module are: Read files, Create Files, Update Files, Delete Files, and Rename files.", "Hard", 2, "Administrator");

INSERT INTO cards (category, front, back, difficulty, creator_id, users_account)
VALUES("Node.js", "What is REPL in Node.js?", "REPL stands for Read-Eval-Print-Loop and it is a virtual environment that comes with Node.js where We can quickly test our JavaScript code. To launch REPL in Node.js, just open the command prompt and type node.", "Hard", 2, "Administrator");