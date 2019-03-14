# Labs 10 CineView
![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) ![Film Strip](./client/favicon-32x32.png) 


### Brought to you by:

| [**Christina Kopecky**](https://github.com/ckopecky) 	| [**Ari Mercado**](https://github.com/ari7946) 	| [**Michelle Paredes**](https://github.com/mparedes003) 	|  [**Dil Sombayeva**](https://github.com/DilStom)  	|
|:----------------------------------------------------:	|:---------------------------------------------:	|:------------------------------------------------------:	|:-------------------------------------------------:	|
|            [<img src="https://avatars3.githubusercontent.com/u/35933955?s=460&v=4" width="80">](https://github.com/ckopecky)           	|         [<img src="https://avatars2.githubusercontent.com/u/29262807?s=400&v=4" width="80">](https://github.com/ari7946)        	|           [<img src="https://avatars1.githubusercontent.com/u/36803340?s=400&v=4" width="80">](https://github.com/mparedes003)           	|           [<img src="https://avatars1.githubusercontent.com/u/25781428?s=400&v=4" width="60">](https://github.com/DilStom)          	|
|            [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/ckopecky)           	|         [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/ari7946)        	|           [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/mparedes003)           	|           [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/DilStom)          	|
| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/cmvnk/)      	| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/)        	| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com)                  	| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/dstoleu/) 	|



### Deployment

Client: [https://cineview.netlify.com/](https://cineview.netlify.com/)

Server: [https://labs10-movie-reviews.herokuapp.com/](https://labs10-movie-reviews.herokuapp.com/)


# Table of Contents

- [Tech Stack](#tech-stack)
    - [Front End](#frontend-built-using)
    - [Back End](#backend-built-using)
- [Reasoning](#why-this-stack?)
    - [React](#react.js)
    - [Netlify](#netlify)
    - [Express/Node](#express/node.js)
    - [Heroku](#heroku)
    - [CSS](#css)
- [Testing](#testing)
- [Installation Instructions](#installation-instructions)
    - [Environmental Variables](#environmental-variables)
    - [Using the Application](#using-the-application)
- [Contributing](#contributing)
- [Data Models](#data-models)
    - [Login Table](#login-table)
    - [Users Table](#users-table)
    - [Reviews Table](#reviews-table)
- [Database in Development and Production](#database)
    - [Development](#sqlite3)
    - [Production](#postgresql)
- [Stripe](#stripe)
- [Payment Structure](#payment-structure)
- [Design](#design)

## Tech Stack

#### Frontend Built Using:

- React.js
- Dependencies:
    - [Axios](https://github.com/axios/axios)
    - [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
    - [dotenv](https://www.npmjs.com/package/dotenv)
    - [react](https://reactjs.org/docs/getting-started.html)
    - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
    - [react-star-rating-component](https://www.npmjs.com/package/react-star-rating-component)
    - [react-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout)
    - [reactstrap](https://reactstrap.github.io/)

- Netlify
    - [https://www.netlify.com/](https://www.netlify.com/)


#### Backend Built Using:

- PostgreSQL (in production)
    - [pg](https://www.postgresql.org/docs/)
- sqlite3 (in development)
    - [sqlite3](https://www.npmjs.com/package/sqlite3)
- Knex
    - [knex](https://github.com/tgriesser/knex)
- Express
    - [express](https://expressjs.com/en/starter/installing.html)
- Node.js
    - [node.js](https://nodejs.org/en/)
- Passport
    - [Passport Google Strategy](http://www.passportjs.org/packages/passport-google-oauth20/)
    - [Passport Twitter Strategy](http://www.passportjs.org/packages/passport-twitter/)

- Heroku
    - [http://www.heroku.com](http://www.heroku.com)

#### Why this Stack?

##### React.js

- React is a mature, robust, and industry tested Javascript library with access to loads of npm packages than can work seamlessly inside React. React will allow us to be flexible with what we want to use in our application. React’s composition patterns will allow us to fluidly separate individual tasks to individual teammates. 

##### Netlify
- Netlify has a great GUI for deployment versus the other options (Now, Firebase, surge, Heroku, etc.). Netlify also integrates with GitHub, providing an option for continuous deployment. 

##### PostgreSQL/sqlite3
- Lightweight, safe - supports concurrency. 

##### Express/Node.js
- Reliable documentation, good performance, compatible with React, using JS throughout this project 

##### Heroku
- The reasoning behind using Heroku is similar to the reasoning for the use of Netlify. 

##### CSS/Reactstrap/Bootstrap
- We decided to utilize Reactstrap and Bootstrap to take advantage of the ease of responsiveness on those components. In addition to our own custom CSS, along with the ability to customize the frameworks to our liking, it gave us the opportunity to create a design to our liking. 



