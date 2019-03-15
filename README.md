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
- [Reasoning](#why-this-stack)
    - [React](#react)
    - [Netlify](#netlify)
    - [Express/Node](#express-node)
    - [Heroku](#heroku)
    - [CSS](#css)
- [Testing](#testing)
- [Installation Instructions](#installation-instructions)
    - [Environmental Variables](#environmental-variables)
    - [Using the Application](#using-the-application)
- [Database in Development and Production](#database)
    - [Development](#development)
    - [Production](#production)
    - [Data Models](#data-models)
        - [Users Table](#users-table)
        - [Reviews Table](#reviews-table)
- [Stripe](#stripe)
- [Payment Structure](#payment-structure)
- [The Movie Database](#the-movie-database)
- [Passport JS](#Passport-JS)
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

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

#### Why this Stack

##### React

- React is a mature, robust, and industry tested Javascript library with access to loads of npm packages than can work seamlessly inside React. React will allow us to be flexible with what we want to use in our application. React’s composition patterns will allow us to fluidly separate individual tasks to individual teammates. 

##### Netlify
- Netlify has a great GUI for deployment versus the other options (Now, Firebase, surge, Heroku, etc.). Netlify also integrates with GitHub, providing an option for continuous deployment. 

##### PostgreSQL/sqlite3
- Lightweight, safe - supports concurrency. 

##### Express-Node
- Reliable documentation, good performance, compatible with React, using JS throughout this project 

##### Heroku
- The reasoning behind using Heroku is similar to the reasoning for the use of Netlify. 

##### CSS
- We decided to utilize Reactstrap and Bootstrap to take advantage of the ease of responsiveness on those components. In addition to our own custom CSS, along with the ability to customize the frameworks to our liking, it gave us the opportunity to create a design to our liking. 

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

### Testing

Testing of this application was completed through every stage of development using terminal logging, Chrome DevTools, and Postman. 

Testing was incorporated into this application by each contributor before submitting a pull request to the master branch and after each merge ensure all elements were working together properly. 

In addition, all pull requests were reviewed by one or more team members, and merges were supervised by our project manager. 

The application for the most part was set up to continuously deploy to Netlify and Heroku. In order to satisfy the requirements of continuous deployment, our master branch was automatically checked upon every pull request to mae sure the new code would not break the build. 

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

### Installation Instructions

#### Environmental Variables:
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

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

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

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

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
<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

    - ##### Data Models

        - ##### Users Table
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



        - ##### Reviews Table

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
<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 


- ##### Stripe
    - A Stripe Dashboard account will need to be created. Here are the instructions:

        1. Click on the icon in the upper right to either SignUp/SignIn for Stripe
        2. Complete the Stripe SignUp form to create your Stripe Account
        3. Once you have your account created, please proceed in going into the dashboard and click on the `Home` section on the left side and click on `Get Your API Keys`. These keys will need to be integrated into the project environmental variables.
        4. There are two keys that will be needed for the project:
            1. Publishable Test Key `tk-1234` example
            2. Secret Test Key (need to click on and authenticate to review, if authentication successful, key will be revealed) `sk-1234` need to be added to the Heroku Database in the `Reveal Config Vars` section under settings.

                * NOTE: Make sure that you are using the `Test` keys and not the `Live` keys. The difference between the two is that the `Test` does not create an actual charge whereas the `Live` key does.

        5. Once you have your `Test` Publishable API Key, you want to:

            1. `cd front-end`
            2. `cd src`
            3. `cd components`
            4. `cd premium`
            
        6. Click on `PayButton.js` add your test publishable key to 
        
        ```jsx
            this.state = {
                publishableKey: (insert publishable key here),
        }
        ```
        
See below example of PayButton.js file:

```jsx

class PayButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishableKey: 'insert publishable key here',
            id: null,
            name: '',
            email: '',
            username: '',
            stripeId: ''
        };
    }
```

##### You can view your payment transactions from the Stripe Dashboard once you have configured the API keys into the project.

- ##### Payment Structure

    A person who is _searching_ for a movie or reads reviews does **not** need to make any payments for our service

    - ##### Users who wish to post a movie review have the following options:
        - Year long subscription for **$9.99** per year
        - Month-long subscription for **$0.99** per month

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

- ##### The Movie Database

    The Movie Database (TMDB) is our third party API that handles the management of all film data. All film-related metadata used in CineView, including synopses, release dates, trailers and poster art is supplied by TMDb. CineView uses the TMDb API but is not endorsed or certified by TMDb.

    To use The Movie Database as a developer, you need to enroll in an Account and receive an API_KEY. Instructions to apply for an API_KEY are provided [here](https://developers.themoviedb.org/3/getting-started/introduction). When API_Key is obtained, place it in the frontend `.env` file you have created.


- ##### Passport-JS

    * This application uses [Passport-JS](http://passportjs.org) to handle OAuth. Two strategies were used in this implementation:

        - [Passport Google Strategy](http://www.passportjs.org/packages/passport-google-oauth20/)
        - [Passport Twitter Strategy](http://www.passportjs.org/packages/passport-twitter/)

        To utilize both strategies in our application, we had to have certain variables in place in our backend `.env` file:

        ```
            TWITTER_CONSUMER_KEY=enroll for a Twitter Developer Account to Obtain a Key
            TWITTER_CONSUMER_SECRET=enroll for a Twitter Developer Account to Obtain a Secret
            GOOGLE_CLIENT_ID=enroll for a Google Developer Account to Obtain an ID.
            GOOGLE_CLIENT_SECRET=enroll for a Google Developer Account to Obtain a Secret. 
            REDIRECT_URI=your redirect after login *Google Strategy only*
        ```

        If using an `.env` file, ensure that there are no spaces or quotes within the file. Simply Replace the name of each value with the value received from your Strategy's developer account. 



- ##### Design

    - [**Original Wireframe**](https://balsamiq.cloud/snv27r3/pkkkbfv/r2278)
    - [**Technical Design Document**](https://docs.google.com/document/d/1sb2JAW1FqGwmWSkeCsIEwU0yIbXYmDrEK7GUTaQdK10/edit)
    - [**Design System Document**](https://codepen.io/flute1952/pen/NJwdqL)
 
<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

            