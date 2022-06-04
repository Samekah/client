# LAP 3 Project

#### Quizzo is a full-stack web app that uses Trivia DB API.

#### Creators - [Team "Connect-4"](https://github.com/Team-Connect-4):
- [Shav Vimalendiran](https://github.com/Shavvimal),
- [Polina Moore](https://github.com/Poligera),
- [Samekah Howard](https://github.com/Samekah),
- [Humza Muzammal](https://github.com/humza1997)


### Deployment:

https://


### Technologies:

- HTML5
- CSS3
- Tailwind CSS
- JavaScript
- React.js
- Redux
- Docker
- Node.js/Express.js
- PostgreSQL
- socket.io

### Functionality:

- Landing page uses socket.io to display number of players and their usernames at that moment
- User needs to enter their username and choose category and difficulty level of quiz
- Upon submission and between questions, a countdown timer of 3 seconds is displayed
- Ten quiz questions appear one after another
- Every question has one correct and three incorrect answers
- User has 15 seconds to choose a correct answer and get a point to add to their displayed current score
- Upon answering the last question, the user is shown their final score and two buttons ("Home" and "Leaderboard")
- If a user got at least 1 point, their username, quiz difficulty level and score gets sent off to be stored in the database
- Leaderboard displays nine scorers in total (top three scorers in each difficulty level)
- Leaderboard gets updated straightaway after a player answers their last question
- Leader's score gets a multiplier of 1.4 for "Hard" and a multiplier of 1.2 for "Medium" level


### Installation & Usage - CLIENT

- Clone or download the [client repo](https://github.com/Team-Connect-4/client)
- Open terminal and navigate to the repo folder
- Run **npm install** to get the Node Modules, wait for them to be installed
- Run **npm run dev** to start the app in the browser
- Upon getting "webpack compiled successfully" in the terminal, you will see a browser page open at http://localhost:4000/


### Installation & Usage - SERVER and DATABASE

- Clone or download the [backend repo](https://github.com/Team-Connect-4/LAP3_Backend)
- Open terminal and navigate to the repo folder
- Run **docker-compose up** to start containers for server and postgreSQL
- Server will run on http://http://localhost:8080/
- Teardown - to stop and keep data, run **docker-compose down**
- Teardown - to stop and remove all artifacts, run **docker-compose down --volumes --remove-orphans**


### Wins

- App is working smoothly
- socket.io displays number of current users
- Design is eye-catching and creative
- Successful and enjoyable teamwork
- Tailwind CSS is a pleasure to work with and saves time


### Challenges

- Implementing Redux took longer that expected as we were all quite new to it
- We did not have enough time to use full socket.io functionality to create a multiplayer "lobby"


### Bugs
- Every user result gets saved in the DB twice
- Not all quiz text is reformatted to get rid of special/foreign characters