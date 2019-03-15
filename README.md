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
- [Database in Development and Production](#database)
    - [Data Models](#data-models)
        - [Users Table](#users-table)
        - [Reviews Table](#reviews-table)
    - [Development](#sqlite3)
    - [Production](#postgresql)
- [Stripe](#stripe)
- [Payment Structure](#payment-structure)
- [Passport-js](#Passport-JS)
    - [Google Strategy](#Google-Strategy)
    - [Twitter Strategy](#Twitter-Strategy)
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
- [TMDb - The Movie Database API](https://www.themoviedb.org/documentation/api)

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

### Testing

Testing of this application was completed through every stage of development using terminal logging, Chrome DevTools, and Postman. 

Testing was incorporated into this application by each contributor before submitting a pull request to the master branch and after each merge ensure all elements were working together properly. 

In addition, all pull requests were reviewed by one or more team members, and merges were supervised by our project manager. 

The application for the most part was set up to continuously deploy to Netlify and Heroku. In order to satisfy the requirements of continuous deployment, our master branch was automatically checked upon every pull request to mae sure the new code would not break the build. 

### Installation Instructions

##### Frontend Variables:
- REACT_APP_API= please see [TMDB](https://www.themoviedb.org/documentation/api) to get an API Key
- REACT_APP_DEV_SERVER_URI= your localhost for server side
- REACT_APP_PROD_SERVER_URI= your deployed server site
- REACT_APP_THE_MOVIE_DB_URL= TMDB Base URL
- REACT_APP_TMDB_URL= TMDB Base URL for images

##### Backend Variables:
- DEBUGGING= boolean
- REDIRECT_URI_PROD= deployed client site
- REDIRECT_URI_DEV= your localhost for client site
- PROD_CLIENT_URI= deployed client site
- DEV_CLIENT_URI= your localhost for client site
- DATABASE_URL= given variable by Heroku when using their PostgreSQL database plugin
- NODE_ENV= tells us to use production or development

* Please see [Twitter Strategy](#twitter-strategy) and [Google Strategy](#google-strategy) for requirements on those variables. 


##### Using the Application

Requirements: 
- Node
- Package Manager (such as Yarn or npm)
    - [**Yarn**](https://yarnpkg.com/en/) was used to build this project.

Have Node? Have **Yarn** or **npm**?
Follow these steps:

1. Fork and clone repo

2. Add an `.env` file to both client and server sides at the root of the folder (same level as the `package.json` file). 

3. Add environmental variables for both the frontend and the backend. 

4. Open terminal and `cd` into the server folder and run `yarn install` to install the necessary node_modules on the backend. 

5. `cd` into the client folder and run `yarn install` to install the necessary node_modules on the frontend. 

6. Run `yarn start` on the client folder to run the frontend on `localhost:3000`

7. Run `yarn start` on the server folder to run the backend on `localhost:5000`

8. Your application is now running and can be tested locally. 


##### Database

* ##### Database in Development and Production

    - ##### Development
        - Development database setup:
            ```

            development: {
                client: 'sqlite3',
                connection: {
                filename: './data/moviereviews.sqlite3'
                },
                useNullAsDefault: true,
                migrations: { directory: './data/migrations/development' },
                seeds: { directory: './data/seeds/development' }
            },

            ```

    - ##### Production
        - Production database setup:
            ```

            production: {
                client: 'pg', 
                connection: process.env.DATABASE_URL,
                useNullAsDefault: true,
                    pool: {
                        min: 2,
                        max: 10
                    },
                migrations: {
                tableName: 'knex_migrations',
                directory: './data/migrations/development'
                },
                seeds: { directory: './data/seeds/production' }
            };
            
            ```
    - ##### Data Models

        - Users Table
            * The ‘users’ table stores the profile for a user. A user’s row is initially created once the ‘Log In’ prompt from Google is completed.


            ```js

            return knex.schema.createTable('users', users => {
                users.increments('id'); // primary key called id
                users.string('twitterId', 25).unique(); // official twitterId of Twitter user
                users.string('googleId', 50).unique(); //official googleId of google user
                users.string('stripeId', 50).unique(); //official stripeId of stripe user
                users.string('username', 20).unique(); // username field
                users.string('name', 100); // name field
                users.string('email', 254).unique(); // email field
                users.boolean('premium_user').defaultTo(false);
                users.string('photo', 200);
                users.text('reviewOrder'); // review order field
                users.timestamp('created_at').defaultTo(knex.fn.now()); // user creation date
                users.timestamp('updated_at').defaultTo(knex.fn.now()); // last updated
            });

            ```



        - Reviews Table

            * The reviews table contains the information for our reviews after a user has completed a Review Form  on a movie they have seen. 


            ```js

            return knex.schema.createTable('movieReviews', movieReviews => {
                    movieReviews
                    .increments('id'); // primary key called id
                    movieReviews
                    .integer('movieId') // movieId must be a    non-negative number
                    .notNullable(); // movieId field is required
                    movieReviews
                    .integer('userId')
                    .unsigned() // userId must be a non-negative number
                    .notNullable() // userId field is required
                    .references('id') // reference primary key 'id' from users table
                    .inTable('users') // reference users table
                    .onUpdate('cascade')
                    .onDelete('cascade') // when you delete a row on the parent table, the related "children" rows on the other one are deleted.
                    .index(); // adds an index to a table over the given columns
                    movieReviews
                    .string('reviewer')
                    .notNullable() // name field is required
                    // .foreign('reviewer') // adds a foreign key constraint to movieReviews table for reviewer column
                    .references('email') // reference 'name' from users table
                    .inTable('users') // reference users table
                    .onUpdate('cascade')
                    .onDelete('cascade') // when you delete a row on the parent table, the related "children" rows on the other one are deleted.
                    .index(); // adds an index to a table over the given columns
                    movieReviews.text('textBody', 5000).notNullable(); // textBody field limited to 500 chars
                    movieReviews.integer('rating'); // rating field
                    movieReviews.timestamp('created_at').defaultTo(knex.fn.now()); // review creation date
                    movieReviews.timestamp('updated_at').defaultTo(knex.fn.now()); // review last updated
                });
            ```
    


